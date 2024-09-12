import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import PublishBlog from './pages/PublishBlog'

function App() {


  return (
    <>
   
    <BrowserRouter>
    <Routes>
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/Signin' element={<Signin/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/publish' element={<PublishBlog/>} />
        
    
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App