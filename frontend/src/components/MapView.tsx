import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import type { CoordinatePoints } from '../types'
import { MapClickHandler } from './MapClickHandler'

const defaultIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

const secondaryIcon = L.divIcon({
  className: 'marker-secondary',
  html: '<div class="marker-secondary-pin"></div>',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
})

L.Marker.prototype.options.icon = defaultIcon

const BRAZIL_CENTER: [number, number] = [-14.235, -51.925]
const DEFAULT_ZOOM = 4

type MapViewProps = {
  points: CoordinatePoints
  onMapClick: (lng: number, lat: number) => void
}

export function MapView({ points, onMapClick }: MapViewProps) {
  return (
    <MapContainer
      center={BRAZIL_CENTER}
      zoom={DEFAULT_ZOOM}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler onMapClick={onMapClick} />
      {points.pointA && (
        <Marker
          position={[points.pointA.lat, points.pointA.lng]}
          icon={defaultIcon}
        />
      )}
      {points.pointB && (
        <Marker
          position={[points.pointB.lat, points.pointB.lng]}
          icon={secondaryIcon}
        />
      )}
    </MapContainer>
  )
}
