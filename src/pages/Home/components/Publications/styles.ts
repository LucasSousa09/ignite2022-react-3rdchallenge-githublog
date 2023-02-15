import styled from 'styled-components'

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`

export const SearchBarContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  flex: 1;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.125rem;
      line-height: 1.8rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.4rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 0.75rem 0.875rem;

    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    font-size: 1rem;
    line-height: 1.5rem;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${(props) => props.theme['base-label']};
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${(props) => props.theme['base-label']};
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
      outline: none;
    }
  }
`

export const PublicationsCardsContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 14.625rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
`

export const PublicationCard = styled.a`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-post']};

  border: 2px solid ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 32px;

  cursor: pointer;

  text-decoration: none;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      line-height: 2rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      padding-top: 0.25rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-label']};
    }
  }

  p {
    margin-top: 20px;

    display: -webkit-box;

    font-size: 1rem;
    line-height: 1.6rem;
    color: ${(props) => props.theme['base-text']};

    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`
