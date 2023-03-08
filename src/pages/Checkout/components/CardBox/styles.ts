import styled, { css } from 'styled-components'

export interface WrapPropsStyle {
  borderVariation?: 'card'
}

const BorderVariation = {
  card: css`
    ${({ theme }) => css`
      border-radius: ${theme.borderRadius['1.5']} ${theme.borderRadius['11']};
    `}
  `,
}

export const Wrap = styled.section<WrapPropsStyle>`
  ${({ theme }) => css`
    padding: ${theme.spacing[10]} ${theme.spacing[6]};
    background-color: ${theme.palette.card};
    border-radius: ${theme.borderRadius['1.5']};
  `}

  ${(props) => props.borderVariation && BorderVariation[props.borderVariation]}
`
