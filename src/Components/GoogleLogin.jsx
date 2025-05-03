import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        console.log("Logged in:", res.user);
        navigate("/home");
      })
      .catch((err) => {
        console.log("Login error:", err.message);
      });
  };

  return (
    <div style={{ width: "100%" }}>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
        </div>
      ) : (
        <button
          style={{ width: "100%", padding: "12px" }}
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default GoogleLogin;
