import styled, { css } from 'styled-components'

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSize[18]};
    color: ${theme.palette.subtitle};
    margin-bottom: ${theme.spacing[4]};
  `}
`
