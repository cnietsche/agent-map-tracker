import { useState } from 'react'
import './App.css'
import { LeftPanel } from './components/LeftPanel'
import { MapView } from './components/MapView'
import type { Coordinates } from './types'

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)

  const handleMapClick = (lng: number, lat: number) => {
    setCoordinates({ lng, lat })
  }

  return (
    <div className="app">
      <LeftPanel coordinates={coordinates} />
      <main className="map-area">
        <MapView coordinates={coordinates} onMapClick={handleMapClick} />
      </main>
    </div>
  )
}

export default App
