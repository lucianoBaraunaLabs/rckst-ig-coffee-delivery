import styled, { css } from 'styled-components'

export const WrapIcrement = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.button};
    width: 4.5rem;
    border-radius: ${theme.borderRadius['1.5']};

    button {
      display: inline-flex;
      font-size: ${theme.fontSize[14]};
      padding: ${theme.spacing[3]} ${theme.spacing[1]};
      color: ${theme.palette['purple-500']};
    }
  `};
  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
  }

  input {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.title};
    border: none;
    width: 100%;
    text-align: center;
    appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`
