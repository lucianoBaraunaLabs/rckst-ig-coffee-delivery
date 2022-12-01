import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<p>página inicial</p>}></Route>
        <Route path="/checkout" element={<p>carrinho</p>}></Route>
        <Route path="/success" element={<p>sucesso</p>}></Route>
      </Route>
    </Routes>
  )
}
