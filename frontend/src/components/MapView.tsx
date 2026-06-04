import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import type { Coordinates } from '../types'
import { MapClickHandler } from './MapClickHandler'

const defaultIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

L.Marker.prototype.options.icon = defaultIcon

const BRAZIL_CENTER: [number, number] = [-14.235, -51.925]
const DEFAULT_ZOOM = 4

type MapViewProps = {
  coordinates: Coordinates | null
  onMapClick: (lng: number, lat: number) => void
}

export function MapView({ coordinates, onMapClick }: MapViewProps) {
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
      {coordinates && (
        <Marker position={[coordinates.lat, coordinates.lng]} />
      )}
    </MapContainer>
  )
}
