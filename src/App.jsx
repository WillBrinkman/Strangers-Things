import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
//import SingleProfile from './components/Register'
import UserProfile from "./components/UserProfile";
import SinglePost from "./components/SinglePost";
import NewPostForm from "./components/NewPostForm";
import { useState } from "react";
import { isLoggedIn } from "./components/authUtils";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn());

  return (
    <div>
      <NavBar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/" element={<Posts />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/new-post" element={<NewPostForm />} />
        {/* <Route render={() => <div>Not Found</div>} /> */}
      </Routes>
    </div>
  );
}

export default App;
