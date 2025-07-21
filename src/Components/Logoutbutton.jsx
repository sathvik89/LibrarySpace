import { useNavigate } from "react-router-dom";
import styles from "../Styles/Logoutbutton.module.css";
import { toast } from 'react-hot-toast';

export default function Logoutbutton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully.");
    navigate("/");
  };

  return (
    <div className={styles.logoutContainer}>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
}
