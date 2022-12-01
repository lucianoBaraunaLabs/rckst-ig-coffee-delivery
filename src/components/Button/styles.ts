import { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export interface ButtonPropsStyles
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: 'simple' | 'big'
}

const heplerButtonVariations = css`
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

const buttonVariations = {
  simple: heplerButtonVariations,
  big: css`
    ${heplerButtonVariations}
    ${({ theme }) => css`
      padding: ${theme.spacing[4]};
      font-size: ${theme.fontSize.base};
      border-radius: 6px;
    `}
  `,
}

const BaseButton = styled.button<ButtonPropsStyles>`
  ${({ theme }) => css`
    background: ${theme.palette['yellow-500']};
    padding: ${theme.spacing[4]};
    color: ${theme.palette.white};
    font-weight: ${theme.fontWeight.bold};

    &:hover {
      background: ${theme.palette['yellow-900']};
    }
  `}

  border: solid 1px transparent;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }
`

export const ButtonContainer = styled(BaseButton)`
  ${(props) => props.variation && buttonVariations[props.variation]};
`