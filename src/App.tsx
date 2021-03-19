import { ThemeProvider } from "./context/ThemeContext";
import { GlobalStyles } from "./styles/GlobalStyles";

import Routes from './routes';

function App() {
  return (
    <ThemeProvider>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
