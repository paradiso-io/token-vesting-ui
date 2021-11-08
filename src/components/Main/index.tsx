import { Container, Row, Col } from 'react-bootstrap'
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
import { useActiveWeb3React } from '../../hooks'
import config from '../../config.json'

function Main(): JSX.Element {
  const { chainId } = useActiveWeb3React()
  const networkId = chainId ?? Number(process.env.REACT_APP_CHAIN_ID)
  // @ts-ignore
  const { token, explorerUrl } = config[networkId]

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
                <VestingRow>
                  <VestingHeader>Total Vesting</VestingHeader>
                  <VestingValue>50,000,000 DTO</VestingValue>
                </VestingRow>
                <VestingRow>
                  <VestingHeader>Locked</VestingHeader>
                  <VestingValue>4,999,500 DTO</VestingValue>
                </VestingRow>
                <VestingRow>
                  <VestingHeader>Releasable</VestingHeader>
                  <VestingValue>5,000 DTO</VestingValue>
                </VestingRow>
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
