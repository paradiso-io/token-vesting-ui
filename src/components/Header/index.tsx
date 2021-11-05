import { Row, Col } from 'react-bootstrap'
import { HeaderWrapper, HeaderContainer, Logo, AlignRight, ConnectWalletButton } from './Styled'
import LogoPNG from '../../assets/images/logo.png'

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Row className="align-items-center w-100">
          <Col md={3}>
            <Logo src={LogoPNG} alt="DotOracle" />
          </Col>
          <Col md={9}>
            <AlignRight>
              <ConnectWalletButton variant="primary">Connect Wallet</ConnectWalletButton>
            </AlignRight>
          </Col>
        </Row>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
