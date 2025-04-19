// import { useState } from "react";

import PreviousButton from "./PreviousButton";
import styles from "../Styles/SeatReserve.module.css";
import RU from "../BookImages/RUimage.png";
export default function ReserveSeat({ onClick, reserve }) {
  return (
    <div className={styles.mainreserve}>
      <img src={RU} alt="" className={styles.imagemin} />
      <div className={styles.reserveInner}>
        You can only reserve 1 seat ‼️
        {reserve ? (
          <h1 className={styles.reserveTitle}>
            🎉You have confirmed your seat in the library 🥳
          </h1>
        ) : (
          <div className={styles.nonReserveTitle}>
            <p>click below to reserve ur seat !!</p>
            <button onClick={onClick}>Reserve seat</button>
          </div>
        )}
      </div>
      <PreviousButton />
    </div>
  );
}
