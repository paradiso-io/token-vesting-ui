import { MobileMenuWrapper, MobileMenuLink } from './Styled'

interface IMobileMenuProps {
  isOpen: boolean
}

function MobileMenu(props: IMobileMenuProps): JSX.Element {
  const { isOpen } = props

  return (
    <>
      {isOpen && (
        <MobileMenuWrapper>
          <li>
            <MobileMenuLink href="https://dotoracle.network" target="_blank" rel="nofollow noreferrer noopener">
              Homepage
            </MobileMenuLink>
          </li>
          <li>
            <MobileMenuLink href="https://staking.dotoracle.network" target="_blank" rel="nofollow noreferrer noopener">
              Stake
            </MobileMenuLink>
          </li>
          <li>
            <MobileMenuLink href="https://docs.dotoracle.network/" target="_blank" rel="nofollow noreferrer noopener">
              Docs
            </MobileMenuLink>
          </li>
        </MobileMenuWrapper>
      )}
    </>
  )
}

export default MobileMenu
