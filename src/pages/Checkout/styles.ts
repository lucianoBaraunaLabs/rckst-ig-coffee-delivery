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
export const CheckoutListCard = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`
export const CheckoutInput = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.palette.button};
    border-radius: ${theme.borderRadius['1.5']};
    background: ${theme.palette.input};

    input,
    label,
    span {
      padding: ${theme.spacing[3]};
    }

    label,
    span {
      color: ${theme.palette.label};
    }
  `}

  display: flex;
  align-items: center;
  position: relative;

  label {
    position: absolute;
  }

  input {
    ${({ theme }) => css`
      color: ${theme.palette.text};
      font-size: ${theme.fontSize[14]};
    `}

    border: none;
    background: transparent;
    width: 100%;

    &:focus {
      box-shadow: none;
    }

    &::placeholder {
      visibility: hidden;
    }

    // campo preenchido
    &:not(:placeholder-shown) {
      & + label {
        visibility: hidden;
      }
    }
  }

  span {
    ${({ theme }) => css`
      font-size: ${theme.fontSize[12]};
    `}

    right: 0;
    font-style: italic;
  }

  &:focus-within {
    box-shadow: inset 0 0 0 1px red;

    label {
      visibility: hidden;
    }
  }
`
