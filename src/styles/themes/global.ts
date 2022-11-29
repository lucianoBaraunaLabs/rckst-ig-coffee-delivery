import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']}
  }

  body {
    background: ${(props) => props.theme.colorBase.background};
    color: ${(props) => props.theme.colorBase.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, input {
    font-family: ${(props) => props.theme.fontHeader};
    font-weight: 800;
    font-size: ${(props) => props.theme.fontSize.base};
  }
`
