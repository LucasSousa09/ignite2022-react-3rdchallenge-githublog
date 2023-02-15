import { useParams } from 'react-router-dom'

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
import { api } from '../../../../lib/axios'
import { useEffect, useState } from 'react'
import { formatPostCreationToNow } from '../../../../utils/formatter'

interface PostData {
  title: string
  created_at: string
  comments: number
  user: {
    login: string
  }
}

export function PostInfo() {
  const [post, setPost] = useState<PostData>({} as PostData)
  const { id } = useParams()

  async function getPostData() {
    const response = await api.get(
      `repos/LucasSousa09/ignite2022-react-3rdchallenge-githublog/issues/${id}`,
    )

    setPost(response.data)
  }

  useEffect(() => {
    getPostData()
  }, [])

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
        <h1>{post.title}</h1>
        <div>
          <InfoSnippet>
            <FontAwesomeIcon icon={faGithub} />
            <span>{post.user && post.user.login}</span>
          </InfoSnippet>
          <InfoSnippet>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {post.created_at && formatPostCreationToNow(post.created_at)}
            </span>
          </InfoSnippet>
          <InfoSnippet>
            <FontAwesomeIcon icon={faComment} />
            <span>{post.comments} Comentários</span>
          </InfoSnippet>
        </div>
      </PostInfoDetails>
    </PostInfoContainer>
  )
}
