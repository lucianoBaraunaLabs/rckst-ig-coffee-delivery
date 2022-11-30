import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Button } from './components/Button/Index'
import { CreditCard, Trash } from 'phosphor-react'
import { ButtonSelect } from './components/ButtonSelect'

export function App() {
  function handleSelectButton(selected: any) {
    console.log('botao selecioando ', selected)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h2>Hello world</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure
        repudiandae provident, doloremque eius reprehenderit at vero
        consequuntur quibusdam nemo dolores a pariatur corporis voluptas
        adipisci porro nostrum dignissimos velit?
      </div>
      <Button onClick={() => console.log('ola')}>Olá mundo dahdi</Button>
      <Button variation="simple" onClick={() => console.log('ola')}>
        <Trash size={16} /> Olá mundo
      </Button>
      <Button variation="simple" onClick={() => console.log('ola')}>
        <Trash size={16} /> Olá mundo
      </Button>
      <ButtonSelect onSelectButton={handleSelectButton}>
        <CreditCard size={16} />
        olá mundo selecionado jaja
      </ButtonSelect>
      <GlobalStyle />
    </ThemeProvider>
  )
}
