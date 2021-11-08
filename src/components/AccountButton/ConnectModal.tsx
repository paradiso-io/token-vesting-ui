import { useState } from 'react'
import { UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { toast } from 'react-toastify'
import ToastMessage from '../ToastMessage'
import Modal from '../Modal'
import { ConnectorNames, connectorsByName } from '../../connectors'
import { connectorLocalStorageKey } from '../../constants'
import { useActiveWeb3React } from '../../hooks'
import { LoadingIcon, ButtonWrapper, WalletButton, ButtonText, WalletLogo } from './Styled'
import MetaMaskLogo from '../../assets/images/metamask.png'
import WalletConnect from '../../assets/images/walletconnect.svg'

interface IConnectModalProps {
  show: boolean
  onHide: () => void
}

function ConnectModal(props: IConnectModalProps): JSX.Element {
  const [isLoadingMetaMask, setLoadingMetaMask] = useState(false)
  const [isLoadingWalletConnect, setLoadingWalletConnect] = useState(false)
  const { show, onHide } = props

  const { activate } = useActiveWeb3React()

  const onConnectWallet = async (connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID]
    console.log('aaa')

    if (connector) {
      window.localStorage.setItem(connectorLocalStorageKey, connectorID)

      if (connectorID === ConnectorNames.Injected) {
        setLoadingMetaMask(true)
      } else {
        setLoadingWalletConnect(true)
      }

      await activate(connector, async (error: Error) => {
        if (error instanceof UnsupportedChainIdError) {
          toast.error(
            <ToastMessage color="error" headerText="Wrong network" bodyText="Please check your chain id." />,
            {
              toastId: connectorID,
            },
          )
        } else if (error instanceof NoEthereumProviderError) {
          toast.error(<ToastMessage color="error" headerText="No provider was found" />, {
            toastId: connectorID,
          })
        } else if (
          error instanceof UserRejectedRequestErrorInjected ||
          error instanceof UserRejectedRequestErrorWalletConnect
        ) {
          if (connector instanceof WalletConnectConnector) {
            const walletConnector = connector as WalletConnectConnector
            walletConnector.walletConnectProvider = null
          }
          toast.error(
            <ToastMessage color="error" headerText="Error" bodyText="Please authorize to access your account" />,
            {
              toastId: connectorID,
            },
          )
        } else {
          toast.error(<ToastMessage color="error" headerText={error.name} bodyText={error.message} />, {
            toastId: connectorID,
          })
        }
      })
    } else {
      toast.error(<ToastMessage color="error" headerText="Can't find connector" />, {
        toastId: connectorID,
      })
    }

    if (connectorID === ConnectorNames.Injected) {
      setLoadingMetaMask(false)
    } else {
      setLoadingWalletConnect(false)
    }
    onHide()
  }

  return (
    <Modal show={show} onHide={onHide} title="Connect Wallet">
      <ButtonWrapper>
        <WalletButton variant="outline-primary" onClick={() => onConnectWallet(ConnectorNames.Injected)}>
          <ButtonText>MetaMask</ButtonText>
          {isLoadingMetaMask ? <LoadingIcon size={20} /> : <WalletLogo src={MetaMaskLogo} alt="MetaMask" />}
        </WalletButton>
        <WalletButton variant="outline-primary" onClick={() => onConnectWallet(ConnectorNames.WalletConnect)}>
          <ButtonText>WalletConnect</ButtonText>
          {isLoadingWalletConnect ? <LoadingIcon size={20} /> : <WalletLogo src={WalletConnect} alt="WalletConnect" />}
        </WalletButton>
      </ButtonWrapper>
    </Modal>
  )
}

export default ConnectModal
