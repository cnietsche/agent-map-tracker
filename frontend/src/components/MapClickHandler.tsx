import { useMapEvents } from 'react-leaflet'

type MapClickHandlerProps = {
  onMapClick: (lng: number, lat: number) => void
}

export function MapClickHandler({ onMapClick }: MapClickHandlerProps) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng.lng, e.latlng.lat)
    },
  })

  return null
}
