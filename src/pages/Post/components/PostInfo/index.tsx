import { InfoSnippet, PostInfoContainer, ProfileInfo } from './styles'

import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <nav>
        <a href="">
          <FontAwesomeIcon icon={faChevronLeft} /> Voltar
        </a>
        <a href="">
          Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>
      <ProfileInfo>
        <h1>JavaScript data types and data structures</h1>
        <div>
          <InfoSnippet>
            <FontAwesomeIcon icon={faGithub} />
            <span>camenrowll</span>
          </InfoSnippet>
          <InfoSnippet>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há um 1 dia</span>
          </InfoSnippet>
          <InfoSnippet>
            <FontAwesomeIcon icon={faComment} />
            <span>5 Comentários</span>
          </InfoSnippet>
        </div>
      </ProfileInfo>
    </PostInfoContainer>
  )
}
