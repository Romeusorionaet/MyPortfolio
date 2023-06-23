import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout/index'

import { Gear } from '../pages/Gear'
import { Insignias } from '../pages/insignias/Insignias'
import { Home } from '../pages/Home'
import { FullProjects } from '../pages/FullProjects/FullProjects'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/Gear" element={<Gear />} />
        <Route path="/Insignias" element={<Insignias />} />
        <Route path="/FullProjects" element={<FullProjects />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
