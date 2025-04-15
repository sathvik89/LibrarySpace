import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function handleSignin(e) {
    e.preventDefault();
    if (username && password && email) {
      alert("Signing in ...");
      navigate("/home");
    } else {
      alert("Enter all the details");
    }
  }
  return (
    <div>
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSignin}>
        <label for="username">
          Username:
          <input
            id="username"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <br />
        <label for="email">
          Email:
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <br />
        <label for="pass">
          Password:
          <input
            id="pass"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signin;
