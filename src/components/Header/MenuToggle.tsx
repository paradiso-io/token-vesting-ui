import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineMenu } from 'react-icons/ai'
import { MenuToggleBtn } from './Styled'

interface IMenuToggleProps {
  openMenuCallback: () => void
}

function MenuToggle(props: IMenuToggleProps): JSX.Element {
  const { openMenuCallback } = props
  const [isActive, setActive] = useState(false)

  const toggleActive = (e: any) => {
    e.preventDefault()
    setActive(!isActive)
    openMenuCallback()
  }

  return (
    <MenuToggleBtn href="#" role="button" className="d-block d-lg-none w-12" onClick={e => toggleActive(e)}>
      {isActive ? <IoCloseOutline size={24} className="mx-auto" /> : <AiOutlineMenu size={24} className="mx-auto" />}
    </MenuToggleBtn>
  )
}

export default MenuToggle
