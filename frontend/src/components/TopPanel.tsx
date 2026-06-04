import type { CoordinatePoints, CoordinateSlot } from '../types'
import { CoordinateGroup } from './CoordinateGroup'

type TopPanelProps = {
  points: CoordinatePoints
  nextSlot: CoordinateSlot
}

export function TopPanel({ points, nextSlot }: TopPanelProps) {
  return (
    <header className="top-panel">
      <div className="coordinate-groups">
        <CoordinateGroup
          title="Ponto 1"
          coordinates={points.pointA}
          isActive={nextSlot === 'A'}
          xLabel="X — Longitude"
          yLabel="Y — Latitude"
        />
        <CoordinateGroup
          title="Ponto 2"
          coordinates={points.pointB}
          isActive={nextSlot === 'B'}
          xLabel="X — Longitude"
          yLabel="Y — Latitude"
        />
      </div>
    </header>
  )
}
