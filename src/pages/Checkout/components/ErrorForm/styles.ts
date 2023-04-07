import styled, { css } from 'styled-components'

export const Wrap = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing[8]};

    > p {
      font-size: ${theme.fontSize[14]};
      color: ${theme.palette['yellow-900']};
      margin-bottom: ${theme.spacing[2]};
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.base};
    font-weigth: ${theme.fontWeight.regular};
    margin-bottom: ${theme.spacing[2]};
  `}
`
