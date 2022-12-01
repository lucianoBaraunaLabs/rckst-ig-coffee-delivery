import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logoCafe from '../../assets/logo.svg'
import { Address, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCafe} alt="Coffe Delivery" />
      </Link>
      <div>
        <Address title="Sua localização">
          <MapPin size={16} weight="fill" />
          Niterói, RJ
        </Address>
        <Link to="/checkout">
          <ShoppingCartSimple />
          <span>50</span>
        </Link>
      </div>
    </HeaderContainer>
  )
}
