import styled from 'styled-components'
import { rgba } from 'polished'
import Background from '../../assets/Background.png'

export const BackgroundContainer = styled.div`
  background: ${(props) => `url(${Background}) no-repeat center,
  linear-gradient(
    0deg,
    ${props.theme.background} 0%,
    ${rgba(props.theme.white, 0.2)} 50%,
    ${props.theme.background} 100%
  )`};

  background-size: cover;

  width: 100%;
  height: 34rem;

  @media (max-width: 1150px) {
    & {
      height: 52rem;
    }
  }

  @media (max-width: 720px) {
    & {
      height: 57rem;
    }
  }

  margin-top: 6rem;

  border: transparent solid 1px;
`

export const TitleContainer = styled.div`
  max-width: 70rem;
  margin: 5.75rem auto;

  display: flex;

  @media (max-width: 1150px) {
    & {
      flex-direction: column;
      max-width: 80%;
      margin: 3rem auto;
    }
  }

  @media (max-width: 720px) {
    & {
      max-width: 90%;
    }
  }

  gap: 3.5rem;

  h1 {
    font-weight: 800;
    font-size: 3rem;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .topics {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 2.5rem;
    margin-top: 2.875rem;

    @media (max-width: 1150px) {
      & {
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        gap: 0.125rem;
      }
    }

    p {
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
      margin-top: 1.25rem;
      gap: 0.75rem;

      span {
        color: ${(props) => props.theme.background};
        border-radius: 50%;
        padding: 0.5rem;
        width: 32px;
        height: 32px;
      }

      .first {
        background-color: ${(props) => props.theme['yellow-dark']};
      }

      .second {
        background-color: ${(props) => props.theme.yellow};
      }

      .third {
        background-color: ${(props) => props.theme['base-text']};
      }

      .fourth {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }

  img {
    max-width: 476px;
  }
`
export const ContentContainer = styled.div`
  max-width: 70rem;
  margin: 5.75rem auto;

  @media (max-width: 1150px) {
    & {
      max-width: 80%;
    }
  }

  @media (max-width: 720px) {
    & {
      max-width: 70%;
    }
  }
`

export const ListProductContainer = styled.div`
  max-width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`
