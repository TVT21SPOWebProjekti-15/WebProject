import './App.css'
import {Route, Routes} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import MainSite from './components/MainSite'
import Delete from './components/Delete'

function App() {
  
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/main' element={<MainSite/>}/>
          <Route path='/delete' element={<Delete/>}/>
        </Routes>
      </div>
  );
}

export default App;