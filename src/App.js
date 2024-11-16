import { StyledEngineProvider } from '@mui/material';
import './App.css';
import Home from './Screens/Home/Home';
import { store } from './Store/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <Home />
      </Provider>
    </StyledEngineProvider>
  );
}

export default App;
