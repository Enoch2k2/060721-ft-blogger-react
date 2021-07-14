import { NavLink } from 'react-router-dom';

const BlogCard = ({ blog: { id, title } }) => {
  console.log('id', id)
  return (
    <div>
      <h4><NavLink to={`/blogs/${id}`}>{ title }</NavLink></h4>
    </div>
  )
}

export default BlogCard;