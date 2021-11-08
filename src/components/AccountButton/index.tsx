import { useState } from 'react'
import ConnectModal from './ConnectModal'
import { AccountAddress, ConnectWalletButton } from './Styled'
import { useActiveWeb3React } from '../../hooks'

function AccountButton(): JSX.Element {
  const [showConnectModal, setShowConnectModal] = useState(false)

  const { account } = useActiveWeb3React()
  const accountEllipsis = account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : ''

  return (
    <>
      {account ? (
        <AccountAddress>{accountEllipsis}</AccountAddress>
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
