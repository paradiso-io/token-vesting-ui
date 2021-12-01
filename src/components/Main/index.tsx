import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Countdown, { zeroPad } from 'react-countdown'
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
  ClaimCountdownText,
} from './Styled'
import { useActiveWeb3React, useVestingContract, useViewport } from '../../hooks'
import config from '../../config.json'
import { formatNumber, fromWei } from '../../utils'

function Main(): JSX.Element {
  const [lockedInfo, setLockedInfo] = useState({
    _locked: 0,
    _releasable: 0,
  })
  const [totalVesting, setTotalVesting] = useState(0)
  const [startVestingTime, setStartVestingTime] = useState(0)
  const [isFetching, setFetching] = useState(false)
  const [isClaiming, setClaiming] = useState(false)
  const [claimed, setClaimed] = useState(false)

  const { account, chainId } = useActiveWeb3React()
  const networkId = chainId ?? Number(process.env.REACT_APP_CHAIN_ID)
  console.log(networkId, chainId, Number(process.env.REACT_APP_CHAIN_ID))
  // @ts-ignore
  const { token, explorerUrl, vesting } = config[networkId]
  const addressEllipsis = `${token.address.substring(0, 8)}...${token.address.substring(token.address.length - 16)}`
  const vestingContract = useVestingContract(vesting)

  const viewPort = useViewport()
  const isMobile = viewPort.width < 576

  const fetchLockedInfo = async () => {
    try {
      setFetching(true)

      if (account && vestingContract) {
        const _lockedInfo = await vestingContract.methods.getLockedInfo(account).call()
        setLockedInfo(_lockedInfo)

        const _startVestingTime = await vestingContract.methods.startVestingTime().call()
        setStartVestingTime(Number(_startVestingTime))

        const _totalVesting = fromWei(_lockedInfo._locked).plus(fromWei(_lockedInfo._releasable))
        setTotalVesting(_totalVesting.toNumber())
      }
    } catch (error: any) {
      toast.error(<ToastMessage color="error" headerText="Error" bodyText="Could not fetch user info" />, {
        toastId: 'fetchLockedInfo',
      })
      console.error(error)
    } finally {
      setFetching(false)
    }
  }

  useEffect(() => {
    fetchLockedInfo()
  }, [account, claimed])

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
      setClaimed(true)
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
          <Col md={9} lg={6}>
            <ClaimWrapper>
              <h5>Vesting details</h5>
              <TokenInfo>
                <img src={token.logo} alt="Token Logo" />
                <span>
                  {token.symbol}:
                  <a href={`${explorerUrl}token/${token.address}`} target="_blank" rel="nofollow noreferrer noopener">
                    {isMobile ? addressEllipsis : token.address}
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
              {!isFetching && (
                <Countdown
                  date={startVestingTime * 1000}
                  zeroPadTime={2}
                  renderer={props2 =>
                    props2.completed ? (
                      <VestingButton variant="primary" disabled={isClaiming} onClick={claimToken}>
                        {isClaiming && <LoadingIcon />}
                        Claim
                      </VestingButton>
                    ) : (
                      <ClaimCountdownText>
                        {props2.completed}
                        {zeroPad(props2.days)}d:{zeroPad(props2.hours)}h:{zeroPad(props2.minutes)}m:
                        {zeroPad(props2.seconds)}s
                      </ClaimCountdownText>
                    )
                  }
                />
              )}
            </ClaimWrapper>
          </Col>
        </Row>
      </Container>
    </MainWrapper>
  )
}

export default Main
