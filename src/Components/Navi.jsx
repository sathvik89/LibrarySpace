import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navi() {
  const location = useLocation();
  const hideNavigation = ["/login", "/signin", "/home"];
  if (hideNavigation.includes(location.pathname)) {
    return null;
  }

  return (
    <div>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signin">
          <button>SignUp</button>
        </Link>
      </div>
    </div>
  );
}
