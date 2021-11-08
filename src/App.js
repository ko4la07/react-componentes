
import './App.css'; 
import BasicTabs from '../src/components/TABS/Tabs'

import './App.css';
import Alerts from './components/Alerts/Alerts';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <Alerts/>
      
      <BasicTabs/>

    </div>
  );
}

export default App;
