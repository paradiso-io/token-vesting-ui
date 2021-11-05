import { ThemeProvider } from 'styled-components/macro'
import Header from './components/Header';
import theme from './theme'
import './assets/css/style.css'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App
