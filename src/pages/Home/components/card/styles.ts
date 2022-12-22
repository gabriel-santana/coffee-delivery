import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;

  align-items: center;

  margin: auto;

  img {
    width: 7.5rem;
    height: 7.5rem;

    position: relative;
    z-index: 1;
    top: -1.5rem;
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 0.25rem;

    span {
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
      font-size: 0.625rem;
      font-weight: 700;

      padding: 0.25rem 0.5rem;
      border-radius: 100px;
    }
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};

    font-size: 1.25rem;
    margin-top: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};

    margin: 0.5rem 1.25rem;
    font-size: 0.875rem;
    text-align: center;
  }

  .cardActions {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    margin-top: 1rem;

    p {
      color: ${(props) => props.theme['base-text']};

      span {
        font-family: 'Baloo 2';
        font-size: 1.25rem;
      }
    }

    > button {
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme['base-card']};

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 8px;
      border: none;
      border-radius: 6px;

      cursor: pointer;
    }
  }
`
