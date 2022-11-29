import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure
        repudiandae provident, doloremque eius reprehenderit at vero
        consequuntur quibusdam nemo dolores a pariatur corporis voluptas
        adipisci porro nostrum dignissimos velit?
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}
