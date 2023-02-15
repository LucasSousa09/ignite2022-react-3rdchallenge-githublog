import { PostInfoContainer, PostInfoDetails } from './styles'
import { InfoSnippet } from '../../../../components/InfoSnippet/styles'

import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { formatPostCreationToNow } from '../../../../utils/formatter'

interface PostInfoProps {
  title: string
  createdAt: string
  comments: number
  userLogin: string
}

export function PostInfo({
  title,
  userLogin,
  comments,
  createdAt,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <nav>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} /> Voltar
        </a>
        <a href="">
          Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>
      <PostInfoDetails>
        <h1>{title}</h1>
        <div>
          <InfoSnippet>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userLogin}</span>
          </InfoSnippet>
          <InfoSnippet>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{createdAt && formatPostCreationToNow(createdAt)}</span>
          </InfoSnippet>
          <InfoSnippet>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments} Comentários</span>
          </InfoSnippet>
        </div>
      </PostInfoDetails>
    </PostInfoContainer>
  )
}
