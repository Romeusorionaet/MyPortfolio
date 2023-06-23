import { Routes, Route } from 'react-router-dom'

import { Gear } from '../pages/Gear'
import { Insignias } from '../pages/insignias/Insignias'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/Gear" element={<Gear />} />
      <Route path="/Insignias" element={<Insignias />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
