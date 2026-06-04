const DECIMAL_PLACES = 6
const EMPTY_VALUE = '—'

export function formatAxis(value: number | undefined): string {
  return value !== undefined ? value.toFixed(DECIMAL_PLACES) : EMPTY_VALUE
}

export function formatRouteLine(
  label: string,
  coordinates: { lng: number; lat: number } | null,
): string {
  const x = formatAxis(coordinates?.lng)
  const y = formatAxis(coordinates?.lat)
  return `${label}: X ${x} / Y ${y}`
}
