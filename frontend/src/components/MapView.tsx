import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'
import type { RoutePoints } from '../types'

const startIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

const endIcon = L.divIcon({
  className: 'end-marker',
  html: '<div class="end-marker__pin"></div>',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
})

const MAP_CENTER: [number, number] = [-14.235, -51.925]
const MAP_ZOOM = 4

type MapViewProps = {
  points: RoutePoints
  onMapClick: (lng: number, lat: number) => void
}

function MapClickHandler({
  onMapClick,
}: {
  onMapClick: (lng: number, lat: number) => void
}) {
  useMapEvents({
    click({ latlng }) {
      onMapClick(latlng.lng, latlng.lat)
    },
  })

  return null
}

export function MapView({ points, onMapClick }: MapViewProps) {
  return (
    <MapContainer center={MAP_CENTER} zoom={MAP_ZOOM} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler onMapClick={onMapClick} />
      {points.start && (
        <Marker
          position={[points.start.lat, points.start.lng]}
          icon={startIcon}
        />
      )}
      {points.end && (
        <Marker position={[points.end.lat, points.end.lng]} icon={endIcon} />
      )}
    </MapContainer>
  )
}
