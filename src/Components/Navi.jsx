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
        {/* //link to link the login page with the button  */}
        <Link to="/login">
          <button>Login</button>
        </Link>
        {/* //link to link the SignUp page with the button  */}
        <Link to="/signin">
          <button>SignUp</button>
        </Link>
      </div>
    </div>
  );
}
