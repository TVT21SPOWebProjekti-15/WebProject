import './App.css';
import {Routes, Route} from 'react-router-dom';
import V1 from './components/V1';
import V2 from './components/V2';
import V3 from './components/V3';
import V4 from './components/V4';
import V5 from './components/V5';
import V6 from './components/V6';
import Navbar from './components/Navbar';
import UserView from './components/UserView';
import Home from './components/Home';
import Register from './components/register'
import Login from './components/login'
import MainSite from './components/MainSite'
import Delete from './components/Delete'
import Info from './components/Info'
import {useLocation} from 'react'


function App() {
  // const location = useLocation();
  return (
    <>
      {/* {location.pathname === '/login' ? null : <Navbar />} */}
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/V1' element={<V1 />} />
          <Route path='/V2' element={<V2 />} />
          <Route path='/V3' element={<V3 />} />
          <Route path='/V4' element={<V4 />} />
          <Route path='/V5' element={<V5 />} />
          <Route path='/V6' element={<V6 />} />
          <Route path='/UserView' element={<UserView />} />
          <Route path='/main' element={<MainSite />} />
          <Route path='/delete' element={<Delete />} />
          <Route path='/Info' element={<Info />} />
        </Routes>
      </div>
    </>
  );
}

export default App;