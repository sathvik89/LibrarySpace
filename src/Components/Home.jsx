import { useNavigate } from "react-router-dom";
import Books from "./Books.jsx";
import Search from "./Search.jsx";
import PreviousButton from "./PreviousButton.jsx";
import NextButton from "./NextButton.jsx";

export default function Home() {
  const d = new Date();
  const navigate = useNavigate();
  function handleSeat() {
    navigate("/occupancy");
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      This is Home page
      <Search />
      <br />
      Date: {`${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()}`}
      <br />
      Day:{" "}
      {d.getDay() == 1
        ? "Monday"
        : d.getDay() == 2
        ? "Tuesday"
        : d.getDay() == 3
        ? "Wednesday"
        : d.getDay() == 4
        ? "Thursday"
        : d.getDay() == 5
        ? "Friday"
        : d.getDay() == 6
        ? "Saturday"
        : "Sunday"}
      <Books />
      <PreviousButton />
      <button onClick={handleSeat}>Occupancy</button>
      <NextButton />
    </div>
  );
}
