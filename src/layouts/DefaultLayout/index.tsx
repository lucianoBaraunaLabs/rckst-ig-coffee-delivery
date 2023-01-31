import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  const { infoCart } = useContext(CoffeeContext)
  return (
    <LayoutContainer>
      <Header quantityItensCart={infoCart.quantity} />
      <Outlet />
    </LayoutContainer>
  )
}
