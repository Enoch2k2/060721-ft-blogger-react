import React from 'react';
import BlogCard from './BlogCard';

const BlogList = (props) => {
  const blogCards = props.blogs.map(( blog, index) => <BlogCard key={ index } blog={ blog } />)
  return (
    <React.Fragment>
      <h3>Blog List</h3>
      
      { blogCards }
    </React.Fragment>
  )
}

export default BlogList;