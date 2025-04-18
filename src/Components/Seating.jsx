import { useNavigate } from "react-router-dom";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

export default function Seating() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Total Seats Available: 220</h1>
      <h3>Remaining seats : 79/220</h3>
      Want to reserve your seat ?
      <button onClick={() => navigate("/reserveseat")}>Reserve Seat</button>
      <PreviousButton />
      {/* <NextButton /> */}
    </div>
  );
}
