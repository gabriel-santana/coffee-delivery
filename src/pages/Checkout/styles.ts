import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  margin: 6rem auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem;
`
export const AdressContainer = styled.div`
  margin-top: 3rem;
  h2 {
    margin-bottom: 1rem;
  }

  .contentAdressContainer {
    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px;

    div + div {
      margin: 1rem 0;

      color: red;
    }

    input {
      height: 2.375rem;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background-color: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};
    }

    input::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    .firstRow {
      width: 30%;
    }

    .secondRow {
      width: 100%;
    }

    .thirdRow {
      width: 100%;
      display: flex;
      gap: 0.75rem;
    }

    .fourthRow {
      width: 100%;
      display: flex;
      gap: 0.75rem;
    }
  }
`
export const SelectedCoffeesContainer = styled.div`
  margin-top: 3rem;
`
