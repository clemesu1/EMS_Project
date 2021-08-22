import Dashboard from './components/Dashboard';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#fdeff9',
      main: '#FEDBD0',
      contrastText: '#442c2e',
    },
    secondary: {
      main: '#600750',
      contrastText: '#FFFFFF',

    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
