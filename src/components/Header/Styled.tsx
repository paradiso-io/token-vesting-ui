import styled, { css } from 'styled-components/macro'
import { Container } from 'react-bootstrap'

export const HeaderWrapper = styled.header`
  background: ${props => props.theme.color.headerBg};
  box-shadow: rgba(0, 0, 0, .4) 0px 3px 5px;
`
export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 80px;
  max-width: 1280px;
`
export const Logo = styled.img`
  height: auto;
`
