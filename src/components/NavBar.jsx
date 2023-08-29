import { isLoggedIn, logOut } from './authUtils';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      logOut();
      navigate('/');
    };
  
  return (
    <nav>
      <ul>
        { isLoggedIn() ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new-post">New Post</Link></li>
            <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Navbar;