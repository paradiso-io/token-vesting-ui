import styled, { css } from 'styled-components/macro'

export const HeaderWrapper = styled.header`
  min-height: 80px;
  background: ${props => props.theme.color.headerBg};
  box-shadow: rgba(0, 0, 0, .4) 0px 3px 5px;
`
