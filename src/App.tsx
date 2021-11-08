import { ThemeProvider } from 'styled-components/macro'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import theme from './theme'
import Web3ReactManager from './components/Web3ReactManager'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './assets/css/style.css'
import './assets/css/toastify.css'

function App(): JSX.Element {
  return (
    <Web3ReactManager>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </Web3ReactManager>
  )
}

export default App
