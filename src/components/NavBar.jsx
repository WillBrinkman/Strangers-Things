// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  //const { isAuthenticated } = useContext(AuthContext); 

  return (
    <nav>
      <ul>
        {/* { isAuthenticated ? (
          <>
            <li><Link to="/new-post">New Post</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        ) : ( */}
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;