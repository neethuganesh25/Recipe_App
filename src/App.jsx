
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import MainHome from './Pages/MainHome'



function App() {
 
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
        <Route path='/mainhome' element={<MainHome/>}/>
          </Routes>
        
       <Footer/> 
    </>
  )
}

export default App
