import './App.css';
import {Routes, Route} from 'react-router-dom';
import V1 from './components/V1';
import V3 from './components/V3';
import Navbar from './components/Navbar';
import UserView from './components/UserView';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/V1' element={<V1 />} />
          <Route path='/V3' element={<V3 />} />
          <Route path='/UserView' element={<UserView />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
