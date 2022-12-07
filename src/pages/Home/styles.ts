import styled, { css } from 'styled-components'
import imgBannerBackground from '../../assets/img-background.png'

export const Hero = styled.header`
  ${({ theme }) => css`
    padding-top: ${theme.spacing[16]};
    padding-bottom: ${theme.spacing[16]};
    margin-bottom: ${theme.spacing[16]};
  `}
  background-image: url(${imgBannerBackground});

  @media (min-width: 900px) {
    background-size: cover;
  }
`
export const HeroContainer = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacing[10]};
  `}

  display: grid;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr minmax(80px, 30.37rem);
    height: 34rem;
  }
`

export const HeroContent = styled.div``

export const HeroTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSize[48]};
    color: ${theme.palette.title};
    font-weight: ${theme.fontWeight.extraBold};
    line-height: 1.2;
    margin-bottom: ${theme.spacing[4]};
  `}
`

export const HeroSubTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize[20]};
    color: ${theme.palette.subtitle};
    line-height: 1.2;
    margin-bottom: ${theme.spacing[16]};
  `}
`

export const HeroImg = styled.figure`
  text-align: center;

  > img {
    width: 100%;
    max-width: 31.25rem;
  }
`

export const HeroList = styled.ul`
  ${({ theme }) => css`
    gap: ${theme.spacing[10]};
    grid-template-columns: repeat(auto-fill, minmax(${theme.spacing[48]}, 1fr));
  `}
  list-style: none;
  display: grid;

  > li {
    ${({ theme }) => css`
      gap: ${theme.spacing[3]};
    `}

    display: flex;
    align-items: center;
  }
`

interface HeroListIconPropsStyles {
  backgroundColor: string
}

export const HeroListIcon = styled.span<HeroListIconPropsStyles>`
  ${({ theme }) => css`
    padding: ${theme.spacing['3.5']};

    svg {
      font-size: ${theme.fontSize[20]};
      color: ${theme.palette.white};
    }
  `};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background-color: ${(props) => props.backgroundColor};
`
