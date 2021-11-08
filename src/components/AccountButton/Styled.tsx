import styled, { keyframes } from 'styled-components/macro'
import { Button } from 'react-bootstrap'
import { CgSpinner } from 'react-icons/cg'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const LoadingIcon = styled(CgSpinner)`
  animation: ${spin} 0.75s linear infinite;
`
export const ConnectWalletButton = styled(Button)`
  border-radius: 3px;
  transition: all 0.5s ease;
  padding: 0.6rem 1rem;
  text-transform: uppercase;
  font-size: 14px;
  width: 180px;

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
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  button {
    margin-bottom: 1rem;

    &:last-child {
      margin: 0;
    }

    svg {
      float: right;
    }
  }
`
export const WalletButton = styled(Button)`
  display: block;
  width: 100%;
  border-radius: 3px;
  padding: 0.75rem;

  &.btn {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    color: #fff;
  }

  &.btn-outline-primary {
    border: 1px solid ${props => props.theme.color.primary}7d;

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
export const ButtonText = styled.span`
  line-height: 22px;
`
export const WalletLogo = styled.img`
  width: 20px;
  float: right;
`
export const AccountAddress = styled.span`
  padding: 0.6rem 1rem;
  border-radius: 3px;
  background-color: ${props => props.theme.color.primary};
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`
