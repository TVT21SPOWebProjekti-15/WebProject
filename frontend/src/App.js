import './App.css';
import {Route, Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import JussinLogin from './components/JussinLogin';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/login' element={<JussinLogin/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </div>
  );
}

export default App;