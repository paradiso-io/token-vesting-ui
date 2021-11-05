import { ThemeProvider } from 'styled-components/macro'
import Header from './components/Header';
import Main from './components/Main';
import theme from './theme'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App
