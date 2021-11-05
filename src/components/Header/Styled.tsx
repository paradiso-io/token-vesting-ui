import styled, { css } from 'styled-components/macro'
import { Container, Button } from 'react-bootstrap'

export const HeaderWrapper = styled.header`
  background: ${props => props.theme.color.headerBg};
  box-shadow: rgba(0, 0, 0, .4) 0px 3px 5px;
`
export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 80px;
`
export const Logo = styled.img`
  height: auto;
`
export const AlignRight = styled.div`
  text-align: right;
`
export const ConnectWalletButton = styled(Button)`
  border-radius: 3px;
  transition: all 0.5s ease;
  padding: 0.75rem 1rem;
  text-transform: uppercase;

  &.btn {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
  }

  &.btn-primary {
    background-color: ${props => props.theme.color.primary};
    border: 1px solid ${props => props.theme.color.primary};

    &:hover,
    &:focus,
    &:active {
      background-color: ${props => props.theme.color.secondary};
      border: 1px solid ${props => props.theme.color.secondary};
    }

    &:active,
    &:focus {
      box-shadow: 0 0 0 0.25rem ${props => props.theme.color.secondary}42;
    }
  }
`
