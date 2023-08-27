import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register'
import SingleProfile from './components/Register'
import UserProfile from './components/Register'
import Home from './components/Home';
import { Navigate } from 'react-router-dom';

function App() {
  return (
      <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route render={() => <div>Not Found</div>} />
        </Routes>
      </div>
  );
}

export default App;
