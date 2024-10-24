import { StyledEngineProvider } from '@mui/material';
import './App.css';
import Home from './Screens/Home/Home';

function App() {

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Home />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
