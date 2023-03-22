import styled, { css } from 'styled-components'
import { ButtonStylesVariations } from '../../../../components/Button/styles'

export const CheckoutCompleteOrderFilds = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacing[3]};
    flex-direction: column;
  `}
  display: flex;
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

export const ButtonPaymentType = styled.div`
  label {
    ${ButtonStylesVariations.big}
    border: solid 1px transparent;
    font-size: inherit;
    display: flex;
    width: 100%;
  }
  input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }

  input:checked + label {
    ${({ theme }) => css`
      background-color: ${theme.palette['purple-100']};
      border-color: ${theme.palette['purple-500']};

      &:hover {
        background-color: ${theme.palette['purple-100']};

        svg {
          color: ${theme.palette['purple-500']};
        }
      }
    `}
  }
`

export const CheckoutListTypePayment = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacing[3]};

    ${ButtonPaymentType} {
      flex: 1 auto;
      font-size: ${theme.fontSize[12]};
      width: 100%;
      text-align: center;

      @media (min-width: 75rem) {
        flex-basis: 30%;
      }
    }
  `}

  display: flex;
  list-style: none;
  flex-wrap: wrap;

  li {
    flex: 1;
  }
`

interface CheckoutInputProps {
  size?: string
}

export const CheckoutInput = styled.div<CheckoutInputProps>`
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
  width: ${(prop) => (prop.size ? prop.size : '100%')};

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
export const FormAddressDelivery = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing[4]};

    @media (max-width: 74.938em) {
      ${CheckoutInput} {
        width: 100%;
      }
    }
  `}
`
