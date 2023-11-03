
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Create from './pages/Create/Creat'
import Home from './pages/Home/Home'
import Recipe from './pages/Recipe/Recipe'
import Search from './pages/Search/Search'
import Navbar from './Components/Navbar/Navbar'






import './App.css'

function App() {


  return (
    <>
      <div className='App'>
        <BrowserRouter>
          
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create/>} />
            <Route path='/search' element={<Search/>} />
            <Route path='/recipe/:id' element={<Recipe/>} />
          </Routes>


        </BrowserRouter>
      </div>



    </>
  )
}

export default App
