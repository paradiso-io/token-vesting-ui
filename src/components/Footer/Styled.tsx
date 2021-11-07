import styled from 'styled-components/macro'

export const FooterWrapper = styled.div`
  padding: 2rem 0;
  background: ${props => props.theme.color.footerBg};
  color: #fff;
`
export const SocialLinks = styled.ul`
  @media (min-width: 768px) {
    text-align: right;
  }
`
export const SocialItem = styled.li`
  display: inline-block;
  vertial-align: middle;
  margin-right: 2rem;

  @media (min-width: 768px) {
    margin-right: 0;
    margin-left: 2rem;
  }

  a {
    color: #fff;
    transition: 0.5s ease all;
    &:hover {
      color: ${props => props.theme.color.primary};
    }
  }
`
