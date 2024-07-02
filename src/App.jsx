
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
 
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
          </Routes>
        
       <Footer/> 
    </>
  )
}

export default App
