import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: minmax(300px, 640px) 448px;
  gap: 32px;
`
export const CheckoutAreaTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSize[18]};
    color: ${theme.palette.subtitle};
    margin-bottom: ${theme.spacing[4]};
  `}
`

export const CheckoutCompleteOrderFilds = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacing[3]};
    flex-direction: column;
  `}
  display: flex;
`

interface CheckoutCardPropsStyle {
  borderVariation?: 'card'
}

const CheckoutBorderVariation = {
  card: css`
    ${({ theme }) => css`
      border-radius: ${theme.borderRadius['1.5']} ${theme.borderRadius['11']};
    `}
  `,
}

export const CheckoutCard = styled.section<CheckoutCardPropsStyle>`
  ${({ theme }) => css`
    padding: ${theme.spacing[10]} ${theme.spacing[6]};
    background-color: ${theme.palette.card};
    border-radius: ${theme.borderRadius['1.5']};
  `}

  ${(props) =>
    props.borderVariation && CheckoutBorderVariation[props.borderVariation]}
`
