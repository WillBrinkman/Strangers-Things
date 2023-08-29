import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../API";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleRegister = async () => {
      const result = await registerUser(username, password);
      if (result.success) {
        alert(result.data.message);
        navigate('/login');
      } else {
        alert('Registration failed.');
      }
    };
  
    return (
          <div>
          <h2>Register</h2>
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
          <button onClick={handleRegister}>Register</button>
        </div>
    );
  }
export default Register;