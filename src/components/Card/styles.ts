import styled, { css } from 'styled-components'
import { Button } from '../Button'
import { WrapIcrement } from '../InputQuantity/styles'

export interface CardPropStyles {
  variation?: 'row' | 'card'
}

export const ImageContainer = styled.figure`
  position: absolute;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  top: -${({ theme }) => theme.spacing[3]};
  width: 100%;
`
export const InfoContainer = styled.div``
export const List = styled.ul`
  ${({ theme }) => css`
    gap: ${theme.spacing[1]};
    margin-bottom: ${theme.spacing[4]};
  `}

  list-style: none;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    ${({ theme }) => css`
      padding: ${theme.spacing[1]} ${theme.spacing[2]};
      background-color: ${theme.palette['yellow-100']};
      color: ${theme.palette['yellow-900']};
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize[10]};
    `}

    border-radius: 6.250rem;
    text-transform: uppercase;
  }
`
export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.palette.subtitle};
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize[20]};
    margin-bottom: ${theme.spacing[2]};
  `}
`
export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette.label};
    font-size: ${theme.fontSize[14]};
    margin-bottom: ${theme.spacing[8]};
  `}
`
export const Footer = styled.footer`
  ${({ theme }) => css`
    gap: ${theme.spacing[9]};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const Price = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette.text};
    font-size: ${theme.fontSize[24]};
    font-family: ${theme.fontHeader};
    font-weight: ${theme.fontWeight.extraBold};

    > span {
      font-family: ${theme.fontBase};
      font-size: ${theme.fontSize[14]};
      font-weight: ${theme.fontWeight.regular};
    }
  `}
`
export const Controls = styled.footer`
  ${({ theme }) => css`
    gap: ${theme.spacing[2]};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonCart = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.palette['purple-900']};
    padding: ${theme.spacing[2]};
    border-radius: ${theme.borderRadius['1.5']};

    display: inline-flex;

    svg {
      color: ${theme.palette.white};
      font-size: ${theme.fontSize[20]};
    }

    &:hover {
      background-color: ${theme.palette['purple-500']};
    }
  `};
`

export const ButtonRemove = styled(Button)`
  ${({ theme }) => css`
    padding-top: ${theme.spacing['1.5']};
    padding-bottom: ${theme.spacing['1.5']};
  `}
`

const CardContainerVariation = {
  row: css`
    ${({ theme }) => css`
      padding: ${theme.spacing[2]} ${theme.spacing[1]};
      gap: ${theme.spacing[5]};
      border-radius: ${theme.borderRadius[0]};
    `}
    display: flex;
    align-items: center;

    ${ImageContainer} {
      ${({ theme }) => css`
        width: ${theme.spacing[16]};
        display: block;

        > img {
          width: 100%;
        }
      `}
      position: relative;
      top: 0;
    }

    ${InfoContainer} {
      flex: 1;
    }

    ${Title} {
      ${({ theme }) => css`
        font-family: ${theme.fontBase};
        font-size: ${theme.fontSize.base};
        font-weight: ${theme.fontWeight.regular};
        /* line-height: 1; */
      `}
    }

    ${Controls} {
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    ${WrapIcrement} {
      ${({ theme }) => css`
        > button {
          padding-top: ${theme.spacing[2]};
          padding-bottom: ${theme.spacing[2]};
        }
      `}
    }

    ${Footer} {
      align-self: flex-start;
      padding-top: ${({ theme }) => theme.spacing[1]};
    }

    ${Price} {
      ${({ theme }) => css`
        font-family: ${theme.fontBase};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize.base};

        > span {
          font-weight: ${theme.fontWeight.bold};
          font-size: inherit;
        }
      `}
    }
  `,
  card: css`
    ${InfoContainer} {
      ${({ theme }) => css`
        padding-top: ${theme.spacing[24]};
      `}
    }
    text-align: center;
  `,
}

export const CardContainer = styled.article<CardPropStyles>`
  ${({ theme }) => css`
    background-color: ${theme.palette.card};
    border-radius: ${theme.spacing['1.5']} ${theme.spacing[9]};
    padding-bottom: ${theme.spacing[5]};
    position: relative;

    &:focus-within {
      outline: solid 1px ${theme.palette['yellow-900']};
    }
  `}
  ${(prop) => prop.variation && CardContainerVariation[prop.variation]}
`
