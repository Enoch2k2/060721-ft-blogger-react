import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/blogs/new">Create Blog</NavLink></li>
        <li><NavLink to="/blogs">List Blogs</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;