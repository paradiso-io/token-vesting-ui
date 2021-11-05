import styled from 'styled-components/macro'
import MainBg from '../../assets/images/page-bg.png'

export const MainWrapper = styled.div`
  background-image: url(${MainBg});
  min-height: calc(100vh - 160px);
  background-size: cover;
  background-attachment: fixed;
  padding-top: 3rem;
  padding-bottom: 3rem;
`
