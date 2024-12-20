import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import PublishBlog from './pages/PublishBlog'
import Edit from './components/Edit'
import { SearchProvider } from './SearchContext'

function App() {


  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signup />} />
            <Route path='/Signin' element={<Signin />} />
            <Route path='/blog/:id' element={<Blog />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/publish' element={<PublishBlog />} />
            <Route path='/edit/:id' element={<Edit />} />


          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  )
}

export default App
