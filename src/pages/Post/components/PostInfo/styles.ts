import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  padding: 2rem;

  gap: 1.25rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 0.75rem;
      font-weight: 700;
      font-family: 'Nunito', sans-serif;
      line-height: 1.2rem;

      text-transform: uppercase;
      text-decoration: none;
      color: ${(props) => props.theme.blue};

      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }
`

export const PostInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  > div {
    display: flex;
    height: 1.652rem;

    margin-top: 0.5rem;

    gap: 2rem;
  }
`
