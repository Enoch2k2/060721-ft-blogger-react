import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  const blogCards = blogs.map(( blog, index) => <BlogCard key={ index } blog={ blog } />)
  return (
    <React.Fragment>
      <h3>Blog List</h3>
      { blogCards }
    </React.Fragment>
  )
}

export default BlogList;