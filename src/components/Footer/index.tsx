import { Container, Row, Col } from 'react-bootstrap'
import { FaTwitter, FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { FooterWrapper, SocialLinks, SocialItem } from './Styled'

function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <Container>
        <Row className="align-items-center">
          <Col md={7} lg={6}>
            Copyright {new Date().getFullYear()}&nbsp;
            <a href="https://dotoracle.network/" target="_blank" rel="nofollow noreferrer noopener">
              DotOracle
            </a>
            . All rights reserved.
          </Col>
          <Col md={5} lg={6}>
            <SocialLinks>
              <SocialItem>
                <a href="https://t.me/dotoracle" target="_blank" rel="nofollow noreferrer noopener">
                  <FaTelegramPlane size="1.5rem" />
                </a>
              </SocialItem>
              <SocialItem>
                <a href="https://twitter.com/DotOracle" target="_blank" rel="nofollow noreferrer noopener">
                  <FaTwitter size="1.5rem" />
                </a>
              </SocialItem>
              <SocialItem>
                <a href="https://github.com/dotoracle" target="_blank" rel="nofollow noreferrer noopener">
                  <FaGithub size="1.5rem" />
                </a>
              </SocialItem>
            </SocialLinks>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
