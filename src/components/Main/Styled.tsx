import styled, { keyframes } from 'styled-components/macro'
import { Button } from 'react-bootstrap'
import { CgSpinner } from 'react-icons/cg'
import MainBg from '../../assets/images/page-bg.png'

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
export const MainWrapper = styled.div`
  background-image: url(${MainBg});
  min-height: calc(100vh - 160px);
  background-size: cover;
  background-attachment: fixed;
  padding-top: 3rem;
  padding-bottom: 3rem;
`
export const TitleWrapper = styled.div`
  position: relative;
`
export const Title = styled.h1`
  position: relative;
  z-index: 2;
  line-height: 1.5;
  text-align: center;
  font-family: MarketSans, sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 992px) {
    font-size: 45px;
  }
  @media (min-width: 1200px) {
    font-size: 50px;
  }
`
export const TitleShadow = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: 2px;
  margin-left: 2px;
  transform: translate(-50%);
  z-index: 1;
  width: 100%;
  line-height: 1.5;
  text-align: center;
  font-family: MarketSans, sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #ff9100;

  @media (min-width: 768px) {
    font-size: 40px;
    margin-top: 3px;
    margin-left: 3px;
  }
  @media (min-width: 992px) {
    font-size: 45px;
  }
  @media (min-width: 1200px) {
    font-size: 50px;
  }
`
export const ClaimWrapper = styled.div`
  margin-top: 2rem;
  box-shadow: #0000004d 0px 0px 50px;
  border-radius: 10px;
  background-color: ${props => props.theme.color.black};
  padding: 1.5rem;
  text-align: center;
  color: #fff;

  @media (min-width: 992px) {
    padding: 2rem;
  }
`
export const TokenInfo = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  img {
    width: 20px;
  }

  a {
    margin-left: 0.5rem;
  }
`
export const VestingTable = styled.table`
  border-top: 1px solid #ffffff42;
  margin-top: 1.5rem;
  width: 100%;
`
export const VestingRow = styled.tr`
  border-bottom: 1px solid #ffffff42;

  td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`
export const VestingHeader = styled.td`
  font-weight: 600;
  text-align: left;
`
export const VestingValue = styled.td`
  text-align: center;
`
export const VestingButton = styled(Button)`
  display: inline-block;
  margin-top: 2rem;
  border-radius: 3px;
  padding: 0.5rem 1.5rem;

  &.btn {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    color: #fff;
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

  svg {
    margin-right: 0.5rem;
  }
`
