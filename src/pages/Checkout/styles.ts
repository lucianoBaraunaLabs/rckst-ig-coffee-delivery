import styled, { css } from 'styled-components'
import { ButtonSelectContainer } from '../../components/ButtonSelect/styles'

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

export const CheckoutCardHeader = styled.header`
  ${({ theme }) => css`
    gap: ${theme.spacing[2]};
    margin-bottom: ${theme.spacing[8]};

    svg {
      font-size: ${theme.fontSize[22]};
    }

    h3 {
      font-size: ${theme.fontSize.base};
      font-family: ${theme.fontBase};
      font-weight: ${theme.fontWeight.regular};
      color: ${theme.palette.subtitle};
      margin-bottom: ${theme.spacing['0.5']};
    }

    p {
      font-size: ${theme.fontSize[14]};
    }
  `}

  display: flex;
`
export const CheckoutListTypePayment = styled.ul`
  ${({ theme }) => css`
    gap: ${theme.spacing[3]};

    ${ButtonSelectContainer} {
      font-size: ${theme.fontSize[12]};
      width: 100%;
      text-align: center;
    }
  `}

  display: flex;
  list-style: none;

  li {
    flex: 1;
  }
`
