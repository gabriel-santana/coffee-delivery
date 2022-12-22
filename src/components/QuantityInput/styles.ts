import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;

  border-radius: 6px;
  padding: 2px;

  background-color: ${(props) => props.theme['base-button']};

  button {
    color: ${(props) => props.theme.purple};
    background-color: transparent;

    border: none;

    padding: 0.5rem 0.25rem;
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    max-width: 1.25rem;
    background-color: transparent;
    border: none;
    text-align: center;
  }
`
