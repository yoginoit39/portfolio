import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

function useParallax(factor = 0.12) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const center = window.innerHeight / 2
        setOffset((rect.top + rect.height / 2 - center) * factor)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [factor])

  return [ref, offset]
}

export default function SectionHeader({ index, eyebrow, title, deck }) {
  const [ref, offset] = useParallax(0.16)

  return (
    <Reveal>
      <div ref={ref} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: deck ? 16 : 56 }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</p>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.6rem)', lineHeight: 1.05, color: '#241c11' }}>
            {title}
          </h2>
        </div>
        <span
          className="section-index"
          aria-hidden="true"
          style={{ transform: `translateY(${offset.toFixed(1)}px) rotate(${(offset * 0.04).toFixed(2)}deg)` }}
        >
          {index}
        </span>
      </div>
      {deck && (
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#8b7d68', lineHeight: 1.85, marginBottom: 56, maxWidth: 540, fontSize: 15.5 }}>
          {deck}
        </p>
      )}
    </Reveal>
  )
}
