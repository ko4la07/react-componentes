
import './App.css'; 
import Tabs from '../src/components/TABS/Tabs'

import './App.css';
import Alerts from './components/Alerts/Alerts';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <Alerts/>

      
      <Tabs/>

    </div>
  );
}

export default App;
