import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,  Routes } from 'react-router-dom'
import Resume from './Pages/Resume/Resume'
import Projects from './Pages/Projects/Projects'
import Home from './Components/Home/Home'



const App = () => {
  return (
    <>
    <div className='app'>
    <Navbar/>

    <Routes>
    <Route path='/' element={<Home/>}/>

      <Route path='/resume' element={<Resume/>}/>
      <Route path='/projects' element={<Projects/>}/>

    </Routes>

    </div>
    </>
  )
}

export default App