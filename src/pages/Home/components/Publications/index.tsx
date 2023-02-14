import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

import {
  PublicationsContainer,
  SearchBarContainer,
  PublicationsCardsContainer,
  PublicationCard,
} from './styles'

interface PostsData {
  title: string
  body: string
  created_at: string
}

export function Publications() {
  const [text, setText] = useState('')
  const [posts, setPosts] = useState<PostsData[]>([])

  async function getPostsData() {
    const response = await api.get(
      `search/issues?q=${text}%20repo:LucasSousa09/ignite2022-react-3rdchallenge-githublog`,
    )
    setPosts(response.data.items)
  }

  useEffect(() => {
    getPostsData()
  }, [])

  return (
    <PublicationsContainer>
      <SearchBarContainer>
        <div>
          <strong>Publicações</strong>
          <span>{posts.length} publicações</span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(evt) => setText(evt.target.value)}
        />
      </SearchBarContainer>
      <PublicationsCardsContainer>
        {posts.map((post) => (
          <PublicationCard key={post.title}>
            <div>
              <h2>{post.title}</h2>
              <span>
                Há{' '}
                {formatDistanceToNow(new Date(post.created_at), {
                  locale: ptBR,
                })}
              </span>
            </div>
            <p>{post.body}</p>
          </PublicationCard>
        ))}
      </PublicationsCardsContainer>
    </PublicationsContainer>
  )
}
