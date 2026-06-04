export type Coordinates = {
  lng: number
  lat: number
}

export type ClickTarget = 'start' | 'end'

export type RoutePoints = {
  start: Coordinates | null
  end: Coordinates | null
}
