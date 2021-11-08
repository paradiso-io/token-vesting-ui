import { Modal as BootstrapModal } from 'react-bootstrap'
import styled from 'styled-components/macro'

const StyledModal = styled(BootstrapModal)`
  .modal-content {
    background-color: ${props => props.theme.color.black};
  }
  .modal-header {
    border-bottom: 2px solid ${props => props.theme.color.primary};
  }
  .modal-footer {
    border-top: 0;
  }
  .btn-close {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI2ZmZic+PHBhdGggZD0nTS4yOTMuMjkzYTEgMSAwIDAxMS40MTQgMEw4IDYuNTg2IDE0LjI5My4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEw5LjQxNCA4bDYuMjkzIDYuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDggOS40MTRsLTYuMjkzIDYuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDYuNTg2IDggLjI5MyAxLjcwN2ExIDEgMCAwMTAtMS40MTR6Jy8+PC9zdmc+');
    box-shadow: none;
    color: #fff;
  }
`

const ModalTitle = styled(BootstrapModal.Title)`
  font-weight: 800;
  color: #fff;
`

interface IModalProps {
  size?: string
  show: boolean
  title: string | JSX.Element | JSX.Element[]
  children?: any
  button?: JSX.Element | JSX.Element[]
  onHide: () => void
}

function Modal(props: IModalProps): JSX.Element {
  const { size, show, title, children, button, onHide } = props

  return (
    <StyledModal autoFocus centered size={size} show={show} onHide={onHide}>
      <BootstrapModal.Header closeButton>
        <ModalTitle>{title}</ModalTitle>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{children}</BootstrapModal.Body>
      {button && <BootstrapModal.Footer>{button}</BootstrapModal.Footer>}
    </StyledModal>
  )
}

export default Modal
