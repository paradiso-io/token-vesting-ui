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
    } catch (error) {
      toast.error(<ToastMessage color="error" headerText="Error" bodyText="Could not fetch user info" />, {
        toastId: 'fetchLockedInfo',
      })
      console.error(error)
    }
  }

  useEffect(() => {
    fetchLockedInfo()
  }, [account])

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
              <VestingButton variant="primary">Claim</VestingButton>
            </ClaimWrapper>
          </Col>
        </Row>
      </Container>
    </MainWrapper>
  )
}

export default Main
