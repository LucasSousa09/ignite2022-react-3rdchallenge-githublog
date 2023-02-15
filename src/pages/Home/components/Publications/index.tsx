import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

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
  number: number
}

interface SearchData {
  searchbar: string
}

export function Publications() {
  const [posts, setPosts] = useState<PostsData[]>([])

  const { register, handleSubmit } = useForm<SearchData>()

  async function getPostsData() {
    const response = await api.get(
      `search/issues?q=""%20repo:LucasSousa09/ignite2022-react-3rdchallenge-githublog`,
    )
    setPosts(response.data.items)
  }

  useEffect(() => {
    getPostsData()
  }, [])

  async function searchForPost(data: SearchData) {
    const response = await api.get(
      `search/issues?q=${data.searchbar}%20repo:LucasSousa09/ignite2022-react-3rdchallenge-githublog`,
    )
    setPosts(response.data.items)
  }

  return (
    <PublicationsContainer>
      <SearchBarContainer>
        <div>
          <strong>Publicações</strong>
          <span>{posts.length} publicações</span>
        </div>
        <form onSubmit={handleSubmit(searchForPost)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('searchbar')}
          />
        </form>
      </SearchBarContainer>
      <PublicationsCardsContainer>
        {posts.map((post) => (
          <PublicationCard key={post.title} href={`/post/${post.number}`}>
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
