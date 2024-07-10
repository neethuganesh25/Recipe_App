
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Register from './components/Register'
import Login from './components/Login'
import Meal from './components/Meal'

import Recipe from './components/Recipe'

function App() {
 
  return (
    <>
    
        <Routes>
        <Route path="/" element={<Register/>}  />
        <Route path="/register" element={<Login/>}  />
        <Route path="/home" element={<Home/>}  />
        <Route path='/about' element={<About/>}/>
        <Route exact path="/:recipeId" element={<Recipe/>}/>
        <Route path="/recipes" element={<Meal/>}  />
          
          
          </Routes>
       
        
    </>
  )
}

export default App
