import { useEffect, useState } from 'react'

import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { api } from '../../../../lib/axios'

import { ProfileContainer, ProfileInfo } from './styles'
import { InfoSnippet } from '../../../../components/InfoSnippet/styles'

interface UserData {
  bio: string
  name: string
  login: string
  followers: number
  avatar_url: string
}

export function GithubProfile() {
  const [userInfo, setUserInfo] = useState<UserData>({} as UserData)

  async function getUserData() {
    const response = await api.get('users/LucasSousa09')
    setUserInfo(response.data)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <ProfileContainer>
      <img src={userInfo.avatar_url} alt="" />
      <ProfileInfo>
        <h1>{userInfo.name}</h1>
        <p>{userInfo.bio}</p>
        <div>
          <InfoSnippet>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userInfo.login}</span>
          </InfoSnippet>
          <InfoSnippet>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rockeseat</span>
          </InfoSnippet>
          <InfoSnippet>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{userInfo.followers} seguidores</span>
          </InfoSnippet>
        </div>
      </ProfileInfo>
    </ProfileContainer>
  )
}
