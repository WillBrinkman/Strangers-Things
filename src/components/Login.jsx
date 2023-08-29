import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logIn } from "./authUtils";
import { loginUser } from "../API";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      const result = await loginUser(username, password);
      console.log(result)
      if (result.success) {
        alert(result.data.message);
        logIn(result.data.token);
                navigate('/profile'); 
      } else {
        alert('Login failed.');
      }
    };
  
    return (
        <div>
        <h2>Login</h2>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
export default Login;
  