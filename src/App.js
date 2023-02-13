import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Manager from './components/Manager';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='colum'></div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/manager" element={<Manager/>}/>
        <Route path='/setting' element={<Settings/>}/>
      </Routes>
    </div>
  );
}

export default App;
