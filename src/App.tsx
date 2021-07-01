import Header from './components/Header';
import usePersistedState from './utils/usePersistedState';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';
import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
