import { HeaderContainer } from './styles'
import headerImg from '../../assets/cover.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerImg} alt="" />
    </HeaderContainer>
  )
}
