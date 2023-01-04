import styled, { css } from 'styled-components'
import imgBannerBackground from '../../assets/img-background.png'

export const Hero = styled.header`
  ${({ theme }) => css`
    padding-top: ${theme.spacing[16]};
    padding-bottom: ${theme.spacing[16]};
    margin-bottom: ${theme.spacing[16]};
  `}
  background-image: url(${imgBannerBackground});

  @media (min-width: 56.25rem) {
    background-size: cover;
  }
`
export const HeroContainer = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacing[10]};
  `}

  display: grid;
  align-items: center;

  @media (min-width: 56.25rem) {
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

export const Products = styled.section`
  ${({ theme }) => css`
    > h3 {
      font-size: ${theme.fontSize[32]};
      margin-bottom: ${theme.spacing[14]};
    }
  `};
`

export const ProductsList = styled.ul`
  ${({ theme }) => css`
    gap: ${theme.spacing[10]} ${theme.spacing[8]};
    margin-bottom: ${theme.spacing[64]};

    &::after,
    > li {
      flex: 1 1 calc(25% - ${theme.spacing[8]});
      min-width: ${theme.spacing[60]};
    }
  `};
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  &::after {
    content: '';
  }
`
