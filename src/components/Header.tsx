import { GiGears } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <section className="w-full bg-blue-900 flex p-3 tablet:px-40 justify-between fixed top-0 z-20">
      <NavLink to="/" className="max-tablet:text-sm">
        ROMEU SOARES
      </NavLink>

      <nav className="flex gap-5 tablet:gap-16 text-2xl max-tablet:text-xl">
        <NavLink to="/Insignias">Insígnias</NavLink>
        <NavLink to="/Gear" className="flex items-center">
          <GiGears />
        </NavLink>
      </nav>
    </section>
  )
}
