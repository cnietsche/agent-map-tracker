import type { Coordinates } from '../types'

const DECIMAL_PLACES = 6

function formatCoordinate(value: number | undefined): string {
  if (value === undefined) return ''
  return value.toFixed(DECIMAL_PLACES)
}

type TopPanelProps = {
  coordinates: Coordinates | null
}

export function TopPanel({ coordinates }: TopPanelProps) {
  return (
    <header className="top-panel">
      <div className="coordinates-fields">
        <label className="field">
          <span className="field-label">X — Longitude</span>
          <input
            type="text"
            readOnly
            placeholder="Clique no mapa"
            value={formatCoordinate(coordinates?.lng)}
            aria-label="Longitude (X)"
          />
        </label>
        <label className="field">
          <span className="field-label">Y — Latitude</span>
          <input
            type="text"
            readOnly
            placeholder="Clique no mapa"
            value={formatCoordinate(coordinates?.lat)}
            aria-label="Latitude (Y)"
          />
        </label>
      </div>
    </header>
  )
}
