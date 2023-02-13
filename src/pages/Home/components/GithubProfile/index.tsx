import { InfoSnippet, ProfileContainer, ProfileInfo } from './styles'
import avatarImg from '../../../../assets/avatar.png'

import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function GithubProfile() {
  return (
    <ProfileContainer>
      <img src={avatarImg} alt="" />
      <ProfileInfo>
        <h1>Cameron Williamson</h1>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div>
          <InfoSnippet>
            <FontAwesomeIcon icon={faGithub} />
            <span>camenrowll</span>
          </InfoSnippet>
          <InfoSnippet>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rockeseat</span>
          </InfoSnippet>
          <InfoSnippet>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </InfoSnippet>
        </div>
      </ProfileInfo>
    </ProfileContainer>
  )
}
