export type Coordinates = {
  lng: number
  lat: number
}

export type CoordinateSlot = 'A' | 'B'

export type CoordinatePoints = {
  pointA: Coordinates | null
  pointB: Coordinates | null
}
