import ToastIcon from './ToastIcon'

interface IToastMessageProps {
  color: 'success' | 'error' | 'info'
  headerText: string
  bodyText?: string
  link?: string
  linkText?: string
}

function ToastMessage(props: IToastMessageProps): JSX.Element {
  const { color, headerText, bodyText, link, linkText } = props

  return (
    <>
      <div className="toastify-header">
        <div className="title-wrapper">
          <div className="toastify-icon">
            <ToastIcon type={color} />
          </div>
          <h6 className="toastify-title">{headerText}</h6>
        </div>
      </div>
      {bodyText && (
        <div className="toastify-body">
          <span>{bodyText}</span>
        </div>
      )}
      {link && (
        <a className="toastify-link" target="_blank" href={link}>
          {linkText ? linkText : 'See more'}
        </a>
      )}
    </>
  )
}

export default ToastMessage
