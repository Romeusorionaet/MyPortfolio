import { GiGears } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <section className="w-full bg-blue-900 flex p-3 tablet:px-20 justify-between items-center fixed top-0 z-20">
      <NavLink to="/" className="max-tablet:text-sm">
        ROMEU SOARES
      </NavLink>

      <nav className="flex gap-5 tablet:gap-16 max-tablet:text-sm desktop:text-lg">
        <NavLink to="/Insignias">Insígnias</NavLink>
        <NavLink to="/FullProjects">Projetos</NavLink>
        <NavLink to="/Gear" className="flex items-center max-tablet:pr-2">
          <GiGears />
        </NavLink>
      </nav>
    </section>
  )
}
