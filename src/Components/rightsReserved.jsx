import React from "react";
import styles from "../Styles/RightsReserved.module.css";

export default function RightsReserved() {
  return (
    <div className={styles.rightsReservedContainer}>
      <p className={styles.rightsReservedText}>
        © {new Date().getFullYear()} All Rights Reserved | LibrarySpace
      </p>
    </div>
  );
}
