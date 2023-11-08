import { Routes , Route } from 'react-router-dom'
import Header from './components/Header/Header'
import { Home } from './pages/Home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import './App.css'
function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/aboutus' element={<About />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
    </>
  )
}

export default App
