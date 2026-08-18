import { useState } from 'react'
import type { FaqItem } from '../../data/faq'

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className={`faq-item neu-out ${isOpen ? 'open' : ''}`} key={item.question}>
            <button className="faq-q" onClick={() => setOpenIndex(isOpen ? null : i)}>
              {item.question}
              <span className="chev">+</span>
            </button>
            <div className="faq-a">
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
