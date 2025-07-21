import logo from "../BookImages/RUimage.png";
import icon from "../BookImages/ProfileIcon.png";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Settings.module.css";

export default function SubscriptionDetails() {
  const navi = useNavigate();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.card}>
        <div className={styles.header}>
          <img src={icon} alt="profile" className={styles.icon} />
          <h2 className={styles.title}>Subscription details</h2>
        </div>
        <div className={styles.planCard}>
          <div style={{fontWeight: 600, fontSize: '1.1em', marginBottom: 8}}>Plan Name & Price</div>
          <ul style={{margin: 0, paddingLeft: 18, color: '#a51c30'}}>
            <li>Premium Annual</li>
            <li>$50/year</li>
          </ul>
        </div>
        <div className={styles.buttonSection}>
          <button className={styles.goBackButton} onClick={() => navi("/settings")}>Go Back</button>
        </div>
      </div>
    </div>
  );
} 