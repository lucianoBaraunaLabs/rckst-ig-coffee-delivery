import styled, { css } from 'styled-components'
import { Button } from '../Button/Index'

export interface ButtonSelectStyles {
  isSelected: boolean
}

export const ButtonSelectContainer = styled(Button).attrs({
  variation: 'big',
})<ButtonSelectStyles>`
  &.selected {
    ${({ theme }) => css`
      background-color: ${theme['purple-100']};
      border-color: ${theme['purple-500']};

      &:hover {
        background-color: ${theme['purple-100']};

        svg {
          color: ${theme['purple-500']};
        }
      }
    `}
  }
`
