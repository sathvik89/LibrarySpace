import logo from "../BookImages/RUimage.png";
import icon from "../BookImages/ProfileIcon.png";
import styles from "../Styles/ProfileSection.module.css";
import PreviousButton from "./PreviousButton";
import { useState } from "react";

export default function Profile() {
  const [phone, setPhone] = useState("+91 9347868783");
  const [email,setEmail] = useState("k*****@gmail.com");
  const [address,setAddress] = useState("Hyderabad")

  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="University Logo" className={styles.logo} />
      </div>

      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <img src={icon} alt="Profile Icon" className={styles.profileIcon} />
          <h2 className={styles.profileTitle}>Profile</h2>
        </div>

        <div className={styles.nameSection}>Sathvik Koriginja</div>

        <div className={styles.infoSection}>
          <div className={styles.infoItem}>
            <span className={styles.label}>Phone no:</span>
            {phone}
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Email:</span> {email}
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Address:</span> {address}
          </div>
        </div>

        <button className={styles.editButton}>Edit profile</button>
        <div className={styles.backButtonContainer}>
          <PreviousButton />
        </div>
      </div>
    </div>
  );
}
