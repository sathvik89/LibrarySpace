// import { useNavigate } from "react-router-dom";
import styles from "../Styles/ProfileList.module.css";
import { useContext } from "react";
import { myMenuContext } from "./Home";

export default function ProfileList() {
  const funci = useContext(myMenuContext);
  //   const navi = useNavigate();
  //   function handleClose() {
  //     // navi("/home");
  //   }
  return (
    <div
      className={styles.mainMenuContainer}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "93.5vh",
      }}
    >
      <div className={styles.mainMenuContainer}>
        <div className={styles.popupCard}>
          <div className={styles.closeButton}>
            <button onClick={funci.handleShow}>X</button>
          </div>
          <div className={styles.Quickoptions}>
            <button>👤 Profile</button>
            <button>💳 Billing and Payments</button>
            <button>📚 Manage History</button>
            <button>⚙️ Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
