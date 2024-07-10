
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import MainHome from './Pages/MainHome'



import Meal from './components/Meal'
import Recipe from './components/Recipe'
import Login from './components/Login'
import Register from './components/Register'
import Category from './components/Category'


function App() {
 
  return (
    <>
    
        <Routes>
        <Route path="/" element={<Register/>}  />
        <Route path="/register" element={<Login/>}  />
        <Route path="/home" element={<Home/>}  />
           <Route path='/about' element={<About/>}/>

        <Route path='/mainhome' element={<MainHome/>}/>

           <Route path='/recipes' element={<Meal/>}/>
           <Route  path="/:recipeId" element={<Recipe/>}/>
           <Route  path="/category" element={<Category/>}/>

          </Routes>
       
        
    </>
  )
}

export default App
