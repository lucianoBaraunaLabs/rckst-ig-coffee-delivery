import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logoCafe from '~/assets/logo.svg'
import * as S from './styles'

interface HeaderProps {
  quantityItensCart: number
}

export function Header({ quantityItensCart }: HeaderProps) {
  const isCartEmpty = quantityItensCart <= 0
  const linkToCheckout = isCartEmpty ? '#' : '/checkout'
  const buttonCartTitle = isCartEmpty ? '' : 'Ir para o checkout'
  const disableButton = isCartEmpty ? 'disabled' : ''

  return (
    <S.HeaderContainer className="container">
      <Link to="/" title="Voltar para a home">
        <img src={logoCafe} alt="Coffe Delivery" />
      </Link>
      <S.Infos>
        <S.Address title="Sua localização">
          <MapPin weight="fill" />
          Niterói, RJ
        </S.Address>
        <S.ButtonCart
          to={linkToCheckout}
          title={buttonCartTitle}
          className={disableButton}
        >
          <ShoppingCartSimple weight="fill" />
          {!isCartEmpty && (
            <span title="Itens no carrinho">{quantityItensCart}</span>
          )}
        </S.ButtonCart>
      </S.Infos>
    </S.HeaderContainer>
  )
}
