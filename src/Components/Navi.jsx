import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../Styles/Navi.module.css";
import RU from "../BookImages/RUimage.png";
export default function Navi() {
  const location = useLocation();
  const hideNavigation = [
    "/login",
    "/signin",
    "/home",
    "/occupancy",
    "/reserveseat",
    "/feedback",
  ];
  if (hideNavigation.includes(location.pathname)) {
    return null;
  }

  return (
    <div className={styles.NaviMain}>
      <div>
        {/* //link to link the login page with the button  */}
        <Link to="/login">
          <button className={styles.login}>Login</button>
        </Link>
        {/* //link to link the SignUp page with the button  */}
        <Link to="/signin">
          <button className={styles.signUp}>SignUp</button>
        </Link>
      </div>
    </div>
  );
}
