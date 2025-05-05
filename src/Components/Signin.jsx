import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/signin.module.css";
import RU from "../BookImages/RUimage.png";
import PreviousButton from "./PreviousButton";
import GoogleLogin from "./GoogleLogin";
export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function handleSignin(e) {
    e.preventDefault();
    if (username && password && email) {
      alert(`Signing in with ${username}`);
      navigate("/home");
    } else {
      alert("Enter all the details");
    }
  }
  return (
    <div className={styles.mainsignin}>
      <img src={RU} alt="" className={styles.imageSign} />
      <h1 className={styles.signuptitle}>Sign Up Page</h1>
      <div className={styles.formSign}>
        <form onSubmit={handleSignin}>
          <label for="username">
            Username:
            <input
              placeholder="Username"
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
              placeholder="Enter your email"
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
              placeholder="Set Password"
              id="pass"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <br />
          <button className={styles.signinbutton} type="submit">
            Sign Up
          </button>
        </form>
        <GoogleLogin textu="Sign up with" />
      </div>
      <PreviousButton />
    </div>
  );
}
