import { BrowserRouter,Navigate, Route,Routes } from 'react-router-dom'
import './App.css';
import Homepage from './Components/pages/Homepage'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import Navbar from './Components/common/navbar'
import Error from './Components/pages/error'
import Post from './Components/pages/Post'
import Dashboard from './Components/pages/Dashboard'
import Login from './Components/pages/Login'
import Footer from './Components/common/Footer'


function App() {
  let isLogged = false
  let data ={
    'st':'user not logged in'
  }
  return (
   <>
<BrowserRouter>
<Navbar />
<Routes>

<Route path='/' element={<Homepage/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='*' element={<Error/>} />
<Route path='/post/:category' element={<Post/>} />
<Route path='/post/:category/:id' element={<Post/>} />
<Route path='/dashboard' element={isLogged ? <Dashboard/> : <Navigate to='/login' replace state={data}/>} />
<Route path='/login' element={<Login/>} />
</Routes>
<Footer/>
</BrowserRouter>
   </>
  );
}

export default App;
