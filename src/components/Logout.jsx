// Logout.js
import { useEffect } from 'react';
import { logOut } from './authUtils';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    logOut();
    navigate('/');
  }, [navigate]);

  return null;
}

export default Logout;
