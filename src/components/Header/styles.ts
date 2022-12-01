import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    padding-top: ${theme.spacing[8]};
    padding-bottom: ${theme.spacing[8]};
  `};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 69.875rem;
`

export const Address = styled.address`
  ${({ theme }) => css`
    background-color: ${theme.palette['purple-100']};
    padding: ${theme.spacing[2]};
    gap: ${theme.spacing[1]};
    font-size: ${theme.fontSize[14]};
    color: ${theme.palette['purple-900']};

    svg {
      color: ${theme.palette['purple-500']};
    }
  `};

  border-radius: 6px;
  display: flex;
  align-items: center;
  font-style: normal;
`
