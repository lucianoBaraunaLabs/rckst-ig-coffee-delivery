import styled, { css } from 'styled-components'
import { IconCircleWrap } from '../../components/IconCircle/styles'

export const Container = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: ${theme.spacing[10]};
    padding-bottom: ${theme.spacing[10]};
    gap: ${theme.spacing[10]};

    @media (min-width: 57.5rem) {
      grid-template-columns: 1fr 492px;
      gap: ${theme.spacing[28]};
      justify-items: auto;
      padding-top: ${theme.spacing[20]};
      padding-bottom: ${theme.spacing[20]};
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing[10]};
    p {
      font-size: ${theme.fontSize[20]};
      color: ${theme.palette.subtitle};
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSize[32]};
    line-height: 1.2;
    color: ${theme.palette['yellow-900']};
  `}
`

export const CardDeliveryWrap = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.px};
    border-radius: ${theme.spacing['1.5']};
    border-top-right-radius: ${theme.borderRadius[9]};
    border-bottom-left-radius: ${theme.borderRadius[9]};
    background: linear-gradient(
      to right,
      ${theme.palette['yellow-500']},
      ${theme.palette['purple-500']}
    );
  `}
`

export const CardDelivery = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing[8]} ${theme.spacing[10]};
    border-radius: ${theme.spacing[1]};
    border-top-right-radius: 2.125rem;
    border-bottom-left-radius: 2.125rem;
  `}

  display: flex;
  flex-direction: column;
  gap: ${(prop) => prop.theme.spacing[8]};
  background-color: #fff;

  ${IconCircleWrap} {
    ${({ theme }) => css`
      padding: ${theme.spacing[2]};
      svg {
        font-size: ${theme.fontSize.base};
      }
    `}
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: ${(prop) => prop.theme.spacing[3]};
`
export const InfoContent = styled.p`
  max-width: 40ch;
  font-style: normal;
  > time,
  p > strong {
    line-height: 1.5;
    display: block;
  }

  > strong {
    font-weight: ${(prop) => prop.theme.fontWeight.bold};
  }
`
export const ImgWrap = styled.aside`
  img {
    max-width: 100%;
  }
`
