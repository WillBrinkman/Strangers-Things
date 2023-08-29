export function logIn(token) {
    localStorage.setItem('token', token);
  }
  
  export function logOut() {
    localStorage.removeItem('token');
  }
  
  export function isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  
  export function makeHeaders() {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : undefined
    };
  }
  
  // const getTokenFromLocalStorage = () => {
  //   const jwt = localStorage.getItem('jwt');
  //   return jwt;
  // }
  
  // const useEffect = () => {
  //   const jwt = getTokenFromLocalStorage();
  //   if (jwt) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
  //   }
  // }