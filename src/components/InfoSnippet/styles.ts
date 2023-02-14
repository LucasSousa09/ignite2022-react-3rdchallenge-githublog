import styled from 'styled-components'

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
