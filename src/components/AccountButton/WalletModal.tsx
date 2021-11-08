import { IoCopyOutline } from 'react-icons/io5'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { Button } from 'react-bootstrap'
import ToastMessage from '../ToastMessage'
import Modal from '../Modal'
import { useActiveWeb3React } from '../../hooks'
import { AddressH6, AccountActions, CopyAddressSpan, LogoutButton } from './Styled'
import config from '../../config.json'

interface IWalletModalProps {
  show: boolean
  onHide: () => void
}

function WalletModal(props: IWalletModalProps): JSX.Element {
  const { show, onHide } = props
  const { account, chainId, deactivate } = useActiveWeb3React()
  const networkId = chainId ?? Number(process.env.REACT_APP_CHAIN_ID)
  // @ts-ignore
  const explorerURL = config[networkId]

  const logout = () => {
    deactivate()
    onHide()
  }

  const onCopyAddress = () => {
    toast.success(<ToastMessage color="success" headerText="Success" bodyText="Copied" />)
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      title="Your Wallet"
      button={<LogoutButton onClick={logout}>Logout</LogoutButton>}
    >
      <AddressH6>{account}</AddressH6>
      <AccountActions>
        <a href={`${explorerURL}/address/${account}`} target="_blank" rel="nofollow noreferrer noopener">
          View on Etherscan
          <HiOutlineExternalLink />
        </a>
        <CopyToClipboard text={account} onCopy={onCopyAddress}>
          <CopyAddressSpan>
            Copy address
            <IoCopyOutline />
          </CopyAddressSpan>
        </CopyToClipboard>
      </AccountActions>
    </Modal>
  )
}

export default WalletModal
