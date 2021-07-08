import React, { useState } from 'react';

const BlogForm = ({ addBlog, header }) => {
  const [ blog, setBlog ] = useState({
    title: '',
    content: '',
    author: ''
  })

  const handleChange = event => {
    setBlog({
      ...blog,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    addBlog(blog)
    
    setBlog({
      title: '',
      content: '',
      author: ''
    })

  }

  return (
    <>
      <h3>{ header }</h3>
      <form onSubmit={ handleSubmit }>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={ blog.title } onChange={ handleChange } required={true} />
        </div>
        <div>
          <label>Author</label>
          <input type="text" name="author" value={ blog.author } onChange={ handleChange } />
        </div>
        <div>
          <label>Content</label><br/>
          <textarea name="content" value={ blog.content } onChange={ handleChange }/>
        </div>

        <input type="submit" value="Create Blog" />
      </form>
    </>
  )
}

export default BlogForm;