import styled from 'styled-components/macro'

export const FooterWrapper = styled.div`
  padding: 1rem 0;
  background: ${props => props.theme.color.footerBg};
  color: #fff;

  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`
export const SocialLinks = styled.ul`
  padding: 0;
  margin: 1rem 0 0;

  @media (min-width: 768px) {
    text-align: right;
    margin-top: 0;
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
