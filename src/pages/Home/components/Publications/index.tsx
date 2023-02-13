import {
  PublicationsContainer,
  SearchBarContainer,
  PublicationsCardsContainer,
  PublicationCard,
} from './styles'

export function Publications() {
  return (
    <PublicationsContainer>
      <SearchBarContainer>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchBarContainer>
      <PublicationsCardsContainer>
        <PublicationCard>
          <div>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in asjdbslaçdfjba
          </p>
        </PublicationCard>
        <PublicationCard>
          <div>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in asjdbslaçdfjba
          </p>
        </PublicationCard>
        <PublicationCard>
          <div>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in asjdbslaçdfjba
          </p>
        </PublicationCard>
      </PublicationsCardsContainer>
    </PublicationsContainer>
  )
}
