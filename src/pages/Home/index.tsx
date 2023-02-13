import { HomeContainer } from './styles'
import { GithubProfile } from './components/GithubProfile'
import { Publications } from './components/Publications'

export function Home() {
  return (
    <HomeContainer>
      <GithubProfile />
      <Publications />
    </HomeContainer>
  )
}
