import Contact from './components/Contact'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Registration from './components/Registration'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import Error from './components/Error'
import Product from './components/Product'
const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={ <Registration/>}></Route>
        <Route path='/about/:id' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/product/:pid' element={<Product/>}></Route>
        <Route path='*' element={<Error/>}/>
      </Routes> 
      <Footer/>
    </div>
  )
}

export default App