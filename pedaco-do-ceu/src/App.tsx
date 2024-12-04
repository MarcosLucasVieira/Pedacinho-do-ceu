import  './App.module.css'
import { Main } from './pages/Main/Main'
import { Restaurantes } from './pages/Restaurantes/Restaurantes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

 
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/restaurantes' element={<Restaurantes/>}/>
      </Routes>
     </Router>
      
    </>
  )
}

export default App
