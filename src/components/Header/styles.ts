import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.background};

  position: fixed;
  z-index: 10;

  width: 100%;

  margin-top: -6rem;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 70rem;

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

  margin: auto;
  padding: 2rem 0;
  left: 0;
  right: 0;

  img {
    width: 5.25rem;
    height: 3rem;
  }
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  .location {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    border: none;

    border-radius: 6px;

    background: ${(props) => props.theme['purple-light']};

    .icon {
      color: ${(props) => props.theme.purple};
    }

    color: ${(props) => props.theme['purple-dark']};
  }

  .cart {
    position: relative;
    text-decoration: none;

    .cartButton {
      cursor: pointer;
      padding: 0.5rem;
      gap: 0.25rem;
      border: none;

      border-radius: 6px;

      background: ${(props) => props.theme['yellow-light']};

      color: ${(props) => props.theme['yellow-dark']};
    }

    span {
      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      left: 1.875rem;
      top: -0.5rem;
      border-radius: 62.5rem;
    }
  }
`
