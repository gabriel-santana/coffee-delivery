import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;

  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;

    position: relative;
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
`
