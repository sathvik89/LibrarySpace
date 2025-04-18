import { useNavigate } from "react-router-dom";
import PreviousButton from "./PreviousButton";
// import { useState } from "react";

export default function Seating({ available }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Total Seats Available: 220</h1>
      <h3>Remaining seats : {available}/220</h3>
      Want to reserve your seat ?
      <button onClick={() => navigate("/reserveseat")}>Reserve Seat</button>
      <PreviousButton />
      {/* <NextButton /> */}
    </div>
  );
}
