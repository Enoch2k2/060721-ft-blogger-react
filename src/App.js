import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';

function App() {
  const [ blogs, setBlogs ] = useState([])

  useEffect(() => {
    // fetch our blogs
    fetch('http://localhost:3001/blogs')
      .then(resp => resp.json())
      .then(blogs => setBlogs(blogs))
  }, [])

  const addBlog = blog => {

    fetch('http://localhost:3001/blogs', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( blog )
    })
      .then(resp => resp.json())
      .then(blog => {
        const newBlogs = [...blogs, blog];
        setBlogs(newBlogs);
      })
  }

  return (
    <div className="App">
      <NavBar />

      <h1>Welcome to Blogger</h1>

      <BlogForm addBlog={ addBlog } header="Create Blog!!!!!" />

      <BlogList blogs={ blogs } />


      <footer>Blogger Componany Inc. All rights reserved.</footer>
    </div>
  );
}

export default App;
