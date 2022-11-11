import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/ignite-timer-logo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CycleContext'

export function Header() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
