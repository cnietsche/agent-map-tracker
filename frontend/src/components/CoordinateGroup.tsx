import type { Coordinates } from '../types'

const DECIMAL_PLACES = 6

function formatCoordinate(value: number | undefined): string {
  if (value === undefined) return ''
  return value.toFixed(DECIMAL_PLACES)
}

type CoordinateGroupProps = {
  title: string
  coordinates: Coordinates | null
  isActive: boolean
  xLabel: string
  yLabel: string
}

export function CoordinateGroup({
  title,
  coordinates,
  isActive,
  xLabel,
  yLabel,
}: CoordinateGroupProps) {
  return (
    <section
      className={`coordinate-group${isActive ? ' coordinate-group--active' : ''}`}
      aria-current={isActive ? 'step' : undefined}
    >
      <h2 className="coordinate-group-title">
        {title}
        {isActive && <span className="coordinate-group-badge">Próximo clique</span>}
      </h2>
      <div className="coordinate-group-fields">
        <label className="field">
          <span className="field-label">{xLabel}</span>
          <input
            type="text"
            readOnly
            placeholder="Clique no mapa"
            value={formatCoordinate(coordinates?.lng)}
            aria-label={xLabel}
          />
        </label>
        <label className="field">
          <span className="field-label">{yLabel}</span>
          <input
            type="text"
            readOnly
            placeholder="Clique no mapa"
            value={formatCoordinate(coordinates?.lat)}
            aria-label={yLabel}
          />
        </label>
      </div>
    </section>
  )
}
