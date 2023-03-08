import { Link, LinkProps, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    padding-top: ${theme.spacing[8]};
    padding-bottom: ${theme.spacing[8]};
  `};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonStyles = css`
  ${({ theme }) => css`
    --icon-color: ${theme.palette['purple-500']};
    --bg-color: ${theme.palette['purple-100']};

    background-color: var(--bg-color);
    padding: ${theme.spacing[2]};

    color: ${theme.palette['purple-900']};
    border-radius: ${theme.borderRadius['1.5']};

    svg {
      color: var(--icon-color);
      font-size: ${theme.fontSize.base};
    }
  `};
`

export const Address = styled.address`
  ${ButtonStyles}

  display: flex;
  gap: ${({ theme }) => theme.spacing[1]};
  align-items: center;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize[14]};
`
export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`

interface ButtonCardProps extends LinkProps {
  isDisabled?: boolean
}

export const ButtonCart = styled(Link)<ButtonCardProps>`
  ${ButtonStyles}

  ${({ theme }) => css`
    --bg-color: ${theme.palette['yellow-100']};
    --icon-color: ${theme.palette['yellow-900']};
  `}

  position: relative;
  display: flex;

  > span {
    ${({ theme }) => css`
      background-color: ${theme.palette['yellow-900']};
      color: ${theme.palette.white};
      font-size: ${theme.fontSize[12]};
      font-weight: ${theme.fontWeight.bold};
      border-radius: ${theme.borderRadius.circle};
      width: ${theme.spacing[5]};
      height: ${theme.spacing[5]};
      top: calc(${theme.spacing[5]} / 2 * -1);
      right: calc(${theme.spacing[5]} / 2 * -1);
    `}

    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &.disabled {
    opacity: 0.5;
    &:focus {
      outline: none;
    }
  }
`
