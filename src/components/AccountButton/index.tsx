import { useState } from 'react'
import ConnectModal from './ConnectModal'
import WalletModal from './WalletModal'
import { AddressButton, ConnectWalletButton } from './Styled'
import { useActiveWeb3React } from '../../hooks'

function AccountButton(): JSX.Element {
  const [showConnectModal, setShowConnectModal] = useState(false)
  const [showWalletModal, setShowWalletModal] = useState(false)

  const { account } = useActiveWeb3React()
  const accountEllipsis = account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : ''

  return (
    <>
      {account ? (
        <>
          <AddressButton variant="primary" onClick={() => setShowWalletModal(true)}>
            {accountEllipsis}
          </AddressButton>
          <WalletModal show={showWalletModal} onHide={() => setShowWalletModal(false)} />
        </>
      ) : (
        <>
          <ConnectWalletButton variant="primary" onClick={() => setShowConnectModal(true)}>
            Connect Wallet
          </ConnectWalletButton>
          <ConnectModal show={showConnectModal} onHide={() => setShowConnectModal(false)} />
        </>
      )}
    </>
  )
}

export default AccountButton
