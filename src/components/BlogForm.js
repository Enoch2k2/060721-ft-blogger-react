const BlogForm = (props) => {
  return (
    <>
      <h3>Create Blog</h3>
      <form>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Author</label>
          <input type="text" />
        </div>
        <div>
          <label>Content</label><br/>
          <textarea />
        </div>

        <input type="submit" value="Create Blog" />
      </form>
    </>
  )
}

export default BlogForm;