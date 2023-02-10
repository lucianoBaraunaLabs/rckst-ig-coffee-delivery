import { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
export interface ButtonPropsStyles
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: 'simple' | 'big'
}

export const ButtonStyles = css`
  ${({ theme }) => css`
    gap: ${theme.spacing[2]};
    padding: ${theme.spacing[2]} ${theme.spacing[2.5]};
    background: ${theme.palette.button};
    color: ${theme.palette.text};
    font-family: ${theme.fontBase};
    font-weight: ${theme.fontWeight.regular};

    svg {
      color: ${theme.palette['purple-500']};
    }

    &:hover {
      color: ${theme.palette.subtitle};
      background: ${theme.palette.hover};

      svg {
        color: ${theme.palette['purple-900']};
      }
    }
  `}

  display: inline-flex;
`

export const ButtonStylesVariations = {
  simple: ButtonStyles,
  big: css`
    ${ButtonStyles}
    ${({ theme }) => css`
      padding: ${theme.spacing[4]};
      font-size: ${theme.fontSize.base};
      border-radius: ${theme.borderRadius['1.5']};
    `}
  `,
}

const BaseButton = styled.button<ButtonPropsStyles>`
  ${({ theme }) => css`
    background: ${theme.palette['yellow-500']};
    padding: ${theme.spacing[4]};
    color: ${theme.palette.white};
    font-weight: ${theme.fontWeight.bold};
    border-radius: ${theme.borderRadius['1.5']};

    &:hover {
      background: ${theme.palette['yellow-900']};
    }
  `}

  border: solid 1px transparent;

  &:hover {
    cursor: pointer;
  }
`

export const ButtonContainer = styled(BaseButton)`
  ${(props) => props.variation && ButtonStylesVariations[props.variation]};
`
