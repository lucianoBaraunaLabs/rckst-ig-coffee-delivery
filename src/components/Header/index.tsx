import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logoCafe from '../../assets/logo.svg'
import { Address, ButtonCart, HeaderContainer, Infos } from './styles'

interface HeaderProps {
  quantityItensCart: number
}

export function Header({ quantityItensCart }: HeaderProps) {
  return (
    <HeaderContainer className="container">
      <Link to="/" title="Voltar para a home">
        <img src={logoCafe} alt="Coffe Delivery" />
      </Link>
      <Infos>
        <Address title="Sua localização">
          <MapPin weight="fill" />
          Niterói, RJ
        </Address>
        <ButtonCart to="/checkout" title="Ir para o checkout">
          <ShoppingCartSimple weight="fill" />
          {quantityItensCart > 0 && (
            <span title="Itens no carrinho">{quantityItensCart}</span>
          )}
        </ButtonCart>
      </Infos>
    </HeaderContainer>
  )
}
