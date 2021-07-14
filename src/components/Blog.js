import React, { useState, useEffect } from 'react'

const Blog = ({ match }) => {
  const [blog, setBlog] = useState({})
  console.log('match params id', match.params.id);

  useEffect(() => {
    fetch('http://localhost:3001/blogs/' + match.params.id)
      .then(resp => resp.json())
      .then(data => setBlog(data))
  }, [])

  return (
    <div>
      <h1>{ blog.title }</h1>
      <p>By: { blog.author }</p>
      <p>{ blog.content }</p>
    </div>
  )
}

export default Blog
