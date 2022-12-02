import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.palette['yellow-900']}
  }

  body {
    background: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, input {
    font-family: ${(props) => props.theme.fontBase};
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.base};
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${(props) => props.theme.fontHeader};
    color: ${(props) => props.theme.palette.title}
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 69.875rem;
  }
`
