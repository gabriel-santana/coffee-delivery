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

  margin-top: 6rem;

  border: transparent solid 1px;
`

export const TitleContainer = styled.div`
  width: 70rem;
  margin: 5.75rem auto;

  display: flex;

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
    justify-content: space-between;
    gap: 2.5rem;
    margin-top: 2.875rem;

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
`
export const ContentContainer = styled.div`
  width: 70rem;
  margin: 5.75rem auto;
`

export const ListProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3.375rem;
`
