import { Row, Col } from 'react-bootstrap'
import { HeaderWrapper, HeaderContainer, Logo, LogoMobile, RightColumn, ConnectWalletButton } from './Styled'
import MainMenu from './MainMenu'
import LogoPNG from '../../assets/images/logo.png'
import LogoMobilePNG from '../../assets/images/logo-mobile.png'

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Row className="align-items-center w-100">
          <Col xs={6} md={3}>
            <a href="/">
              <Logo src={LogoPNG} alt="DotOracle" />
              <LogoMobile src={LogoMobilePNG} alt="DotOracle" />
            </a>
          </Col>
          <Col xs={6} md={9}>
            <RightColumn>
              <MainMenu />
              <ConnectWalletButton variant="primary">Connect Wallet</ConnectWalletButton>
            </RightColumn>
          </Col>
        </Row>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
