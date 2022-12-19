import styled, { css } from 'styled-components'

interface IconCirclePropsStyles {
  iconBgColor: string
}

export const IconCircleWrap = styled.span<IconCirclePropsStyles>`
  ${({ theme }) => css`
    padding: ${theme.spacing['3.5']};

    svg {
      font-size: ${theme.fontSize[20]};
      color: ${theme.palette.white};
    }
    border-radius: ${theme.borderRadius.circle};
  `};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.iconBgColor};
`
