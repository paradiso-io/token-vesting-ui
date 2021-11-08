import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { toast } from 'react-toastify'
import ToastMessage from '../ToastMessage'
import {
  MainWrapper,
  TitleWrapper,
  Title,
  TitleShadow,
  ClaimWrapper,
  TokenInfo,
  VestingTable,
  VestingRow,
  VestingHeader,
  VestingValue,
  VestingButton,
  LoadingIcon,
} from './Styled'
import { useActiveWeb3React, useVestingContract } from '../../hooks'
import config from '../../config.json'
import { formatNumber, fromWei } from '../../utils'

function Main(): JSX.Element {
  const [lockedInfo, setLockedInfo] = useState({
    _locked: 0,
    _releasable: 0,
  })
  const [totalVesting, setTotalVesting] = useState(0)
  const [isClaiming, setClaiming] = useState(false)

  const { account, chainId } = useActiveWeb3React()
  const networkId = chainId ?? Number(process.env.REACT_APP_CHAIN_ID)
  // @ts-ignore
  const { token, explorerUrl, vesting } = config[networkId]
  const vestingContract = useVestingContract(vesting)

  const fetchLockedInfo = async () => {
    try {
      if (account && vestingContract) {
        const _lockedInfo = await vestingContract.methods.getLockedInfo(account).call()
        setLockedInfo(_lockedInfo)

        const _totalVesting = fromWei(_lockedInfo._locked).plus(fromWei(_lockedInfo._releasable))
        setTotalVesting(_totalVesting.toNumber())
      }
    } catch (error: any) {
      toast.error(<ToastMessage color="error" headerText="Error" bodyText="Could not fetch user info" />, {
        toastId: 'fetchLockedInfo',
      })
      console.error(error)
    }
  }

  useEffect(() => {
    fetchLockedInfo()
  }, [account])

  const claimToken = async () => {
    try {
      setClaiming(true)
      if (account && vestingContract) {
        const receipt = await vestingContract.methods.unlock(account).send({ from: account })

        if (receipt) {
          toast.success(<ToastMessage color="success" headerText="Success" bodyText="Please check your balance" />, {
            toastId: 'claimToken',
          })
        }
      }
    } catch (error: any) {
      // we only care if the error is something other than the user rejected the tx
      if (error?.code !== 4001) {
        toast.error(<ToastMessage color="error" headerText="Error" bodyText="Could not claim token" />, {
          toastId: 'claimToken',
        })
      }
      console.error(error)
    } finally {
      setClaiming(false)
    }
  }

  return (
    <MainWrapper>
      <Container>
        <Row>
          <Col>
            <TitleWrapper>
              <Title>Token Vesting</Title>
              <TitleShadow>Token Vesting</TitleShadow>
            </TitleWrapper>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <ClaimWrapper>
              <h5>Vesting details</h5>
              <TokenInfo>
                <img src={token.logo} alt="Token Logo" />
                <span>
                  {token.symbol}:
                  <a href={explorerUrl} target="_blank" rel="nofollow noreferrer noopener">
                    {token.address}
                  </a>
                </span>
              </TokenInfo>
              <VestingTable>
                <tbody>
                  <VestingRow>
                    <VestingHeader>Total Vesting</VestingHeader>
                    <VestingValue>{`${formatNumber(totalVesting.toFixed(3))} ${token.symbol}`}</VestingValue>
                  </VestingRow>
                  <VestingRow>
                    <VestingHeader>Locked</VestingHeader>
                    <VestingValue>{`${formatNumber(fromWei(lockedInfo._locked).toNumber().toFixed(3))} ${
                      token.symbol
                    }`}</VestingValue>
                  </VestingRow>
                  <VestingRow>
                    <VestingHeader>Releasable</VestingHeader>
                    <VestingValue>{`${formatNumber(fromWei(lockedInfo._releasable).toNumber().toFixed(3))} ${
                      token.symbol
                    }`}</VestingValue>
                  </VestingRow>
                </tbody>
              </VestingTable>
              <VestingButton variant="primary" disabled={isClaiming} onClick={claimToken}>
                {isClaiming && <LoadingIcon />}
                Claim
              </VestingButton>
            </ClaimWrapper>
          </Col>
        </Row>
      </Container>
    </MainWrapper>
  )
}

export default Main
