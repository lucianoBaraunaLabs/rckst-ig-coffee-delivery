import styled, { css } from 'styled-components'
import { ButtonContainer } from '../../components/Button/styles'
import { ButtonSelectContainer } from '../../components/ButtonSelect/styles'
import { CardContainer } from '../../components/Card/styles'

interface ListTotalItemProps {
  big?: boolean
}

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 61.25rem) {
    grid-template-columns: minmax(300px, 640px) 448px;
  }
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
  flex-wrap: wrap;

  li {
    flex: 1;
  }
`
export const CheckoutListCard = styled.ul`
  ${({ theme }) => css`
    gap: ${theme.spacing[7]};
    margin-bottom: ${theme.spacing[6]};
  `}

  display: flex;
  flex-direction: column;
  list-style: none;
`
export const ListCardItem = styled.li`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing[8]};
    border-bottom: solid 1px ${theme.palette.button};
  `}

  ${CardContainer} {
    padding-top: 0;
    padding-bottom: 0;
  }
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

export const CheckoutListTotal = styled.ul`
  ${({ theme }) => css`
    gap: ${theme.spacing[3]};
    margin-bottom: ${theme.spacing[6]};
  `}

  display: flex;
  list-style: none;
  flex-direction: column;
`

export const ListTotalItem = styled.p<ListTotalItemProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSize[14]};
    color: ${theme.palette.text};
  `}

  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    ${({ theme }) => css`
      font-size: ${theme.fontSize.base};
    `}
  }

  ${(props) =>
    props.big &&
    css`
      font-size: ${props.theme.fontSize[20]};
      font-weight: ${props.theme.fontWeight.bold};
      color: ${props.theme.palette.subtitle};
    `}
`

export const ButtonConfirm = styled(ButtonContainer)`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize[14]};
`
export const Message = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing[4]};
    font-size: ${theme.fontSize[32]};
  `}
`
