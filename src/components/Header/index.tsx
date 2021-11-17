import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { HeaderWrapper, HeaderContainer, Logo, LogoMobile, RightColumn, MobileWrap } from './Styled'
import MainMenu from './MainMenu'
import MobileMenu from './MobileMenu'
import MenuToggle from './MenuToggle'
import AccountButton from '../AccountButton'
import LogoPNG from '../../assets/images/logo.png'
import LogoMobilePNG from '../../assets/images/logo-mobile.png'

function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Row className="align-items-center">
          <Col xs={4} md={3}>
            <a href="/">
              <Logo src={LogoPNG} alt="DotOracle" />
              <LogoMobile src={LogoMobilePNG} alt="DotOracle" />
            </a>
          </Col>
          <Col xs={8} md={9}>
            <RightColumn>
              <MainMenu />
              <MobileWrap>
                <AccountButton />
                <MenuToggle openMenuCallback={() => setMobileMenuOpen(!mobileMenuOpen)} />
              </MobileWrap>
            </RightColumn>
          </Col>
        </Row>
      </HeaderContainer>
      <MobileMenu isOpen={mobileMenuOpen} />
    </HeaderWrapper>
  )
}

export default Header
