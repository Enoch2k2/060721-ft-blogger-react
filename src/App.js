// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import Blog from './components/Blog';

import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/blogs')
      .then(resp => resp.json())
      .then(blogs => this.setState({ blogs }))
  }

  addBlog = (blog, history) => {

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
        const newBlogs = [...this.state.blogs, blog];
        this.setState({ blogs: newBlogs });
        history.push('/blogs')
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
  
          <NavBar />
  
          <h1>Welcome to Blogger</h1>
          <Switch>
            <Route 
              exact path="/"
              render={ 
                (props) => <BlogList { ...props } blogs={ this.state.blogs } />
              }
            />
            <Route 
              exact path="/blogs"
              render={ 
                (props) => <BlogList { ...props } blogs={ this.state.blogs } />
              }
            />
            <Route 
              exact path="/blogs/new"
              render={
                (props) => <BlogForm 
                            { ...props }
                            addBlog={ this.addBlog }
                            header="Create Blog!!!!!"
                          />
              }
            />
            <Route
              exact path="/blogs/:id"
              component={ Blog }
            />
  
            <Route
              render={() => <h1>Page Not Found</h1>}
            />
          </Switch>
          <footer>Blogger Componany Inc. All rights reserved.</footer>
        </div>
      </Router>
    );
  }
}


// function App() {
//   const [ blogs, setBlogs ] = useState([])

//   useEffect(() => {
//     // fetch our blogs
//     fetch('http://localhost:3001/blogs')
//       .then(resp => resp.json())
//       .then(blogs => setBlogs(blogs))
//   }, [])

//   const addBlog = (blog, history) => {

//     fetch('http://localhost:3001/blogs', {
//       method: "POST",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify( blog )
//     })
//       .then(resp => resp.json())
//       .then(blog => {
//         const newBlogs = [...blogs, blog];
//         setBlogs(newBlogs);
//         history.push('/blogs')
//       })
//   }

//   return (
//     <Router>
//       <div className="App">

//         <NavBar />

//         <h1>Welcome to Blogger</h1>
//         <Switch>
//           <Route 
//             exact path="/"
//             render={ 
//               (props) => <BlogList { ...props } blogs={ blogs } />
//             }
//           />
//           <Route 
//             exact path="/blogs"
//             render={ 
//               (props) => <BlogList { ...props } blogs={ blogs } />
//             }
//           />
//           <Route 
//             exact path="/blogs/new"
//             render={
//               (props) => <BlogForm 
//                           { ...props }
//                           addBlog={ addBlog }
//                           header="Create Blog!!!!!"
//                         />
//             }
//           />
//           <Route
//             exact path="/blogs/:id"
//             component={ Blog }
//           />

//           <Route
//             render={() => <h1>Page Not Found</h1>}
//           />
//         </Switch>
//         <footer>Blogger Componany Inc. All rights reserved.</footer>
//       </div>
//     </Router>
//   );
// }

export default App;
