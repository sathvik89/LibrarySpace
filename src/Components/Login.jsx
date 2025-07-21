import React, { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Login.module.css";
import PreviousButton from "./PreviousButton";
import RU from "../BookImages/RUimage.png";
import GoogleLogin from "./GoogleLogin";
import { toast } from 'react-hot-toast';
export const textContext = createContext();
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validCredentials = {
    admin: "admin123",
    user: "user123",
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (username && password) {
      if (validCredentials[username] === password) {
        toast.success(`Logged in as: ${username}`);
        navigate("/home");
      } else {
        toast.error("Invalid username or password.");
      }
    } else {
      toast.error("Please enter both username and password.");
    }
  }

  return (
    <div className={styles.mainLogin}>
      <img className={styles.imageRU} src={RU} alt="" />
      <h1 className={styles.titleLogin}>Library Management System</h1>
      <form onSubmit={handleSubmit} className={styles.formLogin}>
        <label htmlFor="username">
          Username: ( dummy: admin )
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="pass">
          Password: (admin123)
          <input
            id="pass"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <textContext.Provider value="Login with">
          <div style={{ width: "100%" }}>
            <GoogleLogin />
          </div>
        </textContext.Provider>

        {/* {error && <p className={styles.error}>{error}</p>} */}
        <button className={styles.Loginsubmit} type="submit">
          Login
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <PreviousButton navi={"/"} />
      </div>
    </div>
  );
}

export default Login;
