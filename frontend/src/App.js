
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Create';
import Read from './components/reaad/Read'
import Update from './components/Update'
import Home from './components/Home/Home';

const App = () => (
  <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path = "/" element={<Home/>} />
    <Route path='/create' element={<Create/>}/>
    <Route path='/all' element={<Read/>}/>
    <Route path='/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
export default App
