
import './App.css'; 
import Tabs from '../src/components/TABS/Tabs'

import './App.css';
import Alerts from './components/Alerts/Alerts';
import Login from './components/Login';
import Box from '@mui/material/Box';


function App() {
  return (
    <div className="App">
      <Login />
      <Alerts/>

      <Box sx={{ width: '100%',display: 'flex',mx: 10 ,my:10 }}>
      <Tabs />
      </Box>

      

    </div>
  );
}

export default App;
