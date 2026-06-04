import type { Coordinates } from '../types'

const DECIMAL_PLACES = 6

function formatCoordinate(value: number | undefined): string {
  if (value === undefined) return ''
  return value.toFixed(DECIMAL_PLACES)
}

type LeftPanelProps = {
  coordinates: Coordinates | null
}

export function LeftPanel({ coordinates }: LeftPanelProps) {
  return (
    <aside className="left-panel">
      <div className="coordinates-row">
        <label className="field">
          <span className="field-label">X</span>
          <input
            type="text"
            readOnly
            placeholder="Longitude"
            value={formatCoordinate(coordinates?.lng)}
            aria-label="Longitude (X)"
          />
        </label>
        <label className="field">
          <span className="field-label">Y</span>
          <input
            type="text"
            readOnly
            placeholder="Latitude"
            value={formatCoordinate(coordinates?.lat)}
            aria-label="Latitude (Y)"
          />
        </label>
      </div>
    </aside>
  )
}
