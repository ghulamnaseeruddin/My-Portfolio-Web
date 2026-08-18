type Status = 'live' | 'building' | 'forked'

const LABEL: Record<Status, string> = { live: 'LIVE', building: 'BUILDING', forked: 'FORKED' }

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <div className={`status ${status}`}>
      <span className="dot" />
      {LABEL[status]}
    </div>
  )
}
