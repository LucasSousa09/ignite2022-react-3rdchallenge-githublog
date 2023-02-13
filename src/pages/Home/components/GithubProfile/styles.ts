import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;

  height: 212px;

  width: 100%;

  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  padding: 2rem 2.5rem;

  gap: 2rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  p {
    padding-top: 0.5rem;
  }

  > div {
    display: flex;
    height: 1.652rem;

    margin-top: 1.5rem;

    gap: 1.5rem;
  }
`

export const InfoSnippet = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    height: 18px;
    width: 18px;

    color: ${(props) => props.theme['base-label']};
  }
`
