import './App.css';
import {Routes, Route} from 'react-router-dom';
import V1 from './components/V1';
import V3 from './components/V3';
import Navbar from './components/Navbar';
import UserView from './components/UserView';
import Home from './components/Home';
import Register from './components/register'
import Login from './components/login'
import MainSite from './components/MainSite'
import Delete from './components/Delete'
import {useLocation} from 'react'


function App() {
  // const location = useLocation();
  return (
    <>
      {/* {location.pathname === '/login' ? null : <Navbar />} */}
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/V1' element={<V1 />} />
          <Route path='/V3' element={<V3 />} />
          <Route path='/UserView' element={<UserView />} />
          <Route path='/main' element={<MainSite />} />
          <Route path='/delete' element={<Delete />} />
        </Routes>
      </div>
    </>
  );
}

export default App;