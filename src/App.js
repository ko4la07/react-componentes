import './App.css'; 
import Tabs from '../src/components/TABS/Tabs'
import Alerts from './components/Alerts/Alerts';
import Login from './components/Login/Login';
import Box from '@mui/material/Box';
import Search from './components/Search/Search';
import { Cards } from './components/Card/Cards';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Login />
      <Alerts/>
      <Box sx={{ width: '100%',display: 'flex',mx: 10 ,my:10 }}>
      <Tabs />
      </Box>
      <Search/>
      <Cards/>
      <Box>
      <Register/>
      </Box>
    </div>
  );
}

export default App;
