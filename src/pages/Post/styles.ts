import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 864px;
  /* max-width: 864px;
  min-width: 864px; */

  margin: -88px auto 0;
`
export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 32px;

  a {
    display: inline;
    align-items: center;
    gap: 0.5rem;

    font-family: 'Nunito', sans-serif;
    line-height: 1.2rem;

    text-decoration: underline;
    color: ${(props) => props.theme.blue};

    &:hover {
      filter: brightness(0.7);
    }
  }

  pre {
    font-size: 1rem;
    line-height: 25.6px;

    border-radius: 2px;

    background: ${(props) => props.theme['base-post']};
    padding: 16px;
  }
`
