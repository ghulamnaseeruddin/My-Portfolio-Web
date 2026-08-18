import type { JourneyItem } from '../../data/journey'

export default function TimelineCard({ item }: { item: JourneyItem }) {
  return (
    <div className="t-item neu-out">
      <div className="t-tag">{item.tag}</div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
}
