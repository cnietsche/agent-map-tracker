import { useState } from 'react'
import './App.css'
import { MapView } from './components/MapView'
import { TopPanel } from './components/TopPanel'
import type { ClickTarget, Coordinates, RoutePoints } from './types'

const emptyPoints: RoutePoints = { start: null, end: null }

function App() {
  const [points, setPoints] = useState<RoutePoints>(emptyPoints)
  const [nextTarget, setNextTarget] = useState<ClickTarget>('start')

  const handleMapClick = (lng: number, lat: number) => {
    const coordinates: Coordinates = { lng, lat }

    setPoints((current) =>
      nextTarget === 'start'
        ? { ...current, start: coordinates }
        : { ...current, end: coordinates },
    )
    setNextTarget((target) => (target === 'start' ? 'end' : 'start'))
  }

  return (
    <div className="app">
      <TopPanel points={points} />
      <main className="map-area">
        <MapView points={points} onMapClick={handleMapClick} />
      </main>
    </div>
  )
}

export default App
