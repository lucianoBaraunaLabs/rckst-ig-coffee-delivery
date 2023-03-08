import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 61.25rem) {
    grid-template-columns: minmax(300px, 640px) 448px;

    > section {
      grid-column: 1 / 2;
      grid-row: 1;
    }

    > aside {
      grid-column: 2 / 3;
    }
  }
`
