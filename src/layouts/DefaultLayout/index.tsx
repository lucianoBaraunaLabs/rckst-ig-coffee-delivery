import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '~/components/Header'
import { CoffeeContext } from '~/contexts/CoffeeContext'
import * as S from './styles'

export function DefaultLayout() {
  const { cart } = useContext(CoffeeContext)
  return (
    <S.LayoutContainer>
      <Header quantityItensCart={cart.quantityOfItems} />
      <Outlet />
    </S.LayoutContainer>
  )
}
