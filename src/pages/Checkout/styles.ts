import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  margin: 6rem auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media (max-width: 1150px) {
    & {
      max-width: 80%;
    }
  }

  @media (max-width: 720px) {
    & {
      max-width: 90%;
    }
  }
`
export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
    }

    .info {
      display: flex;
      gap: 0.5rem;

      color: ${(props) => props.theme['yellow-dark']};

      .textInfo {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;

        .textInfo1 {
          color: ${(props) => props.theme['base-subtitle']};
          font-size: 1rem;
        }

        .textInfo2 {
          color: ${(props) => props.theme['base-text']};
          font-size: 0.875rem;
        }
      }
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
      width: 100%;
      display: flex;
      gap: 0.75rem;

      .cep {
        width: 30%;

        @media (max-width: 720px) {
          & {
            width: 35%;
          }
        }
      }
    }

    .secondRow {
      width: 100%;
    }

    .thirdRow {
      width: 100%;
      display: flex;
      gap: 0.75rem;

      .number {
        width: 43%;

        @media (max-width: 720px) {
          & {
            width: 40%;
          }
        }
      }
    }

    .fourthRow {
      width: 100%;
      display: flex;
      gap: 0.75rem;

      .neighborhood {
        width: 60%;
      }

      .uf {
        width: 30%;
      }
    }
  }

  .contentPaymentContainer {
    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px;

    .info {
      display: flex;
      gap: 0.5rem;

      color: ${(props) => props.theme.purple};

      .textInfo {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;

        .textInfo1 {
          color: ${(props) => props.theme['base-subtitle']};
          font-size: 1rem;
        }

        .textInfo2 {
          color: ${(props) => props.theme['base-text']};
          font-size: 0.875rem;
        }
      }
    }

    .selectPayment {
      display: flex;
      width: 100%;
      margin-top: 1rem;
      gap: 0.75rem;
      font-size: 0.75rem;

      .selectPaymentMethod {
        box-sizing: border-box;
        float: left;
        height: 3.1875rem;
        position: relative;
        width: 100%;
      }

      .selectPaymentMethod label {
        background: ${(props) => props.theme['base-button']} no-repeat center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }

      .selectPaymentMethod label span {
        z-index: 1;
      }
      .selectPaymentMethod label input[type='radio'] {
        all: unset;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      .selectPaymentMethod label input[type='radio']:checked {
        background-color: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme.purple};
        border-radius: 6px;
      }
      .selectPaymentMethod label input[type='radio']:checked + span {
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`
export const SelectedCoffeesContainer = styled.div`
  margin-top: 3rem;
`
