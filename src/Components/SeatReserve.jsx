// import { useState } from "react";

import PreviousButton from "./PreviousButton";

export default function ReserveSeat({ onClick, reserve }) {
  return (
    <div>
      You can only reserve 1 seat ‼️
      {reserve ? (
        <h1>🎉You have confirmed your seat in the library 🥳</h1>
      ) : (
        <div>
          <p>click below to reserve ur seat !!</p>
          <button onClick={onClick}>Reserve seat</button>
        </div>
      )}
      <PreviousButton />
    </div>
  );
}
