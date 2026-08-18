import { journey } from '../data/journey'
import Reveal from '../components/shared/Reveal'
import TimelineCard from '../components/shared/TimelineCard'

export default function Journey() {
  return (
    <Reveal>
      <div className="section-head">
        <h2>Journey</h2>
      </div>
      <p className="section-intro">How I got from a first Python script to three products running in production.</p>
      <div className="timeline">
        {journey.map((item) => (
          <TimelineCard key={item.title} item={item} />
        ))}
      </div>
    </Reveal>
  )
}
