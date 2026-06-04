import type { RoutePoints } from '../types'
import { formatRouteLine } from '../utils/coordinates'

type TopPanelProps = {
  points: RoutePoints
}

export function TopPanel({ points }: TopPanelProps) {
  return (
    <header className="top-bar">
      <p className="coord-line">{formatRouteLine('Início', points.start)}</p>
      <p className="coord-line">{formatRouteLine('Fim', points.end)}</p>
    </header>
  )
}
