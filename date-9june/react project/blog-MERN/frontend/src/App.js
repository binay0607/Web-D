import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Auth from './components/Login';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn= useSelector(state=> state.isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/auth' element={<Auth/>} />
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path= '/blogs/add' element={<AddBlog/>} />
          <Route path='/myBlogs' element={<UserBlogs/>} />
          <Route path= '/myBlogs/:id' element={<BlogDetails/>}/>
        </Routes>
      </main>
    </React.Fragment>


  );
}

export default App;
