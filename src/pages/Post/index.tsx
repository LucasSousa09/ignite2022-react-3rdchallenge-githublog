import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { api } from '../../lib/axios'

import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContent } from './styles'

import ReactMarkdown from 'react-markdown'

interface PostData {
  title: string
  created_at: string
  comments: number
  user: {
    login: string
  }
  body: string
}

export function Post() {
  const [post, setPost] = useState<PostData>({} as PostData)
  const { id } = useParams()

  async function getPostData() {
    const response = await api.get(
      `repos/LucasSousa09/ignite2022-react-3rdchallenge-githublog/issues/${id}`,
    )
    console.log(response.data.body)
    setPost(response.data)
  }

  useEffect(() => {
    getPostData()
  }, [])

  return (
    <PostContainer>
      <PostInfo
        title={post.title}
        comments={post.comments}
        createdAt={post.created_at ? post.created_at : ''}
        userLogin={post.user ? post.user.login : ''}
      />
      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
