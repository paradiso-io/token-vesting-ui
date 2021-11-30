import { MainMenuWrapper, MenuLink } from './Styled'

function MainMenu(): JSX.Element {
  return (
    <MainMenuWrapper>
      <MenuLink href="https://dotoracle.network" target="_blank" rel="nofollow noreferrer noopener">
        Homepage
      </MenuLink>
      <MenuLink href="https://staking.dotoracle.network" target="_blank" rel="nofollow noreferrer noopener">
        Stake
      </MenuLink>
      <MenuLink href="https://docs.dotoracle.network/" target="_blank" rel="nofollow noreferrer noopener">
        Docs
      </MenuLink>
    </MainMenuWrapper>
  )
}

export default MainMenu
