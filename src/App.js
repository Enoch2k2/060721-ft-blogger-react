import NavBar from './components/NavBar';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';

const blogs = [
  { title: "title 1", author: "author 1", content: "content 1" },
  { title: "title 2", author: "author 2", content: "content 2" },
  { title: "title 3", author: "author 3", content: "content 3" },
  { title: "title 4", author: "author 4", content: "content 4" },
  { title: "title 5", author: "author 5", content: "content 5" }
]

function App() {
  return (
    <div className="App">
      <NavBar />

      <h1>Welcome to Blogger</h1>

      <BlogForm />

      <BlogList blogs={ blogs } />

      <footer>Blogger Componany Inc. All rights reserved.</footer>
    </div>
  );
}

export default App;
