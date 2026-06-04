import { useState } from 'react'
import './App.css'
import { MapView } from './components/MapView'
import { TopPanel } from './components/TopPanel'
import type { CoordinatePoints, CoordinateSlot, Coordinates } from './types'

const initialPoints: CoordinatePoints = {
  pointA: null,
  pointB: null,
}

function App() {
  const [points, setPoints] = useState<CoordinatePoints>(initialPoints)
  const [nextSlot, setNextSlot] = useState<CoordinateSlot>('A')

  const handleMapClick = (lng: number, lat: number) => {
    const coords: Coordinates = { lng, lat }

    setPoints((prev) =>
      nextSlot === 'A'
        ? { ...prev, pointA: coords }
        : { ...prev, pointB: coords },
    )
    setNextSlot((slot) => (slot === 'A' ? 'B' : 'A'))
  }

  return (
    <div className="app">
      <TopPanel points={points} nextSlot={nextSlot} />
      <main className="map-area">
        <MapView points={points} onMapClick={handleMapClick} />
      </main>
    </div>
  )
}

export default App
