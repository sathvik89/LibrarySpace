import { useNavigate } from "react-router-dom";
import Books from "./Books.jsx";
import Search from "./Search.jsx";
import PreviousButton from "./PreviousButton.jsx";
import NextButton from "./NextButton.jsx";
import Help from "./Help.jsx";
import Ebook from "./Ebooks.jsx";
import Allbooks from "./AllBooks.jsx";
import Rules from "./Rules.jsx";

export default function Home({ searchQuery, setSearchQuery }) {
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
      <Search value={searchQuery} onChange={setSearchQuery} />
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
      <Books searchQuery={searchQuery} />
      <Allbooks />
      <Ebook />
      <button onClick={handleSeat}>Occupancy</button>
      <Rules />
      {/* <NextButton /> */}
      <p>Your feedBack matters</p>
      <button onClick={() => navigate("/feedback")}>Give Feedback</button>
      <PreviousButton />
      <Help />
    </div>
  );
}
