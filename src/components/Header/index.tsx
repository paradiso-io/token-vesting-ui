import { HeaderWrapper, HeaderContainer, Logo } from './Styled'
import { Button } from 'react-bootstrap'
import LogoPNG from '../../assets/images/logo.png'

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo src={LogoPNG} alt="DotOracle" />
        <div>
          <Button>Connect Wallet</Button>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
