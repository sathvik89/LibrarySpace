import React, { useContext, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { textContext } from "./Login";
import { toast } from 'react-hot-toast';
const GoogleLogin = ({ textu }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        toast.success("Google login successful!");
        navigate("/home");
      })
      .catch((err) => {
        toast.error("Google login failed: " + err.message);
      });
  };
  const text = useContext(textContext);

  return (
    <div style={{ width: "100%", marginTop: "10px" }}>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
        </div>
      ) : (
        <button
          style={{ width: "100%", padding: "12px" }}
          onClick={handleGoogleLogin}
        >
          {text} {textu} Google
        </button>
      )}
    </div>
  );
};

export default GoogleLogin;
