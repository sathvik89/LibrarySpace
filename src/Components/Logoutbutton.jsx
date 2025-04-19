import { useNavigate } from "react-router-dom";
import styles from "../Styles/Logoutbutton.module.css";

export default function Logoutbutton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className={styles.logoutContainer}>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
}
