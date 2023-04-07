import styled, { css } from 'styled-components'
import {
  ButtonContainer,
  ButtonStylesVariations,
} from '../../../../components/Button/styles'
import { CardContainer } from '../../../../components/Card/styles'

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
export const CheckoutListPaymentType = styled.div`
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
export const CheckoutListTotal = styled.ul`
  ${({ theme }) => css`
    gap: ${theme.spacing[3]};
    margin-bottom: ${theme.spacing[6]};
  `}

  display: flex;
  list-style: none;
  flex-direction: column;
`

interface ListTotalItemProps {
  big?: boolean
}

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
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.fontSize[14]};

    &:disabled {
      opacity: 0.6;
    }
  `}
`
export const Message = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing[4]};
    font-size: ${theme.fontSize[32]};
  `}
`
