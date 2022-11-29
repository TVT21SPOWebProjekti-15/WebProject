import './App.css';
import {Route, Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import MainSite from './components/MainSite';

function App() {
  
  return (
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/main' element={<MainSite/>}/>
        </Routes>
      </div>
  );
}

export default App;