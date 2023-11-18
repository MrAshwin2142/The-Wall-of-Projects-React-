import './App.css'
import Contributors from './components/Contributors'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Wall from './components/Wall'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contribuotrs' element={<Contributors/>}/>
      <Route path='/wall' element={<Wall/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
