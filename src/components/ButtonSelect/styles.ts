import styled, { css } from 'styled-components'
import { Button } from '../Button'

export interface ButtonSelectStyles {
  isSelected: boolean
}

export const ButtonSelectContainer = styled(Button).attrs({
  variation: 'big',
})<ButtonSelectStyles>`
  &.selected {
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
