// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Alerts from "./components/Alerts/Alerts";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Alerts/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
