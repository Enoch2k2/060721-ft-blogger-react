
const BlogCard = ({ blog: { title, author, content } }) => {
  return (
    <div>
      <h4>{ title }</h4>
      <p>By: { author }</p>
      <p>{ content }</p>
    </div>
  )
}

export default BlogCard;