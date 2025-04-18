import { useNavigate } from "react-router-dom";
import Books from "./Books.jsx";
import Search from "./Search.jsx";
import PreviousButton from "./PreviousButton.jsx";
import Help from "./Help.jsx";
import Ebook from "./Ebooks.jsx";
import Allbooks from "./AllBooks.jsx";
import Rules from "./Rules.jsx";
import LibraryTimings from "./LibraryTimings.jsx";
import PresentDay from "./PresentDay.jsx";

export default function Home({ searchQuery, setSearchQuery }) {
  const navigate = useNavigate();
  function handleSeat() {
    navigate("/occupancy");
  }
  return (
    <div>
      This is Home page
      <Search value={searchQuery} onChange={setSearchQuery} />
      <br />
      <PresentDay />
      <LibraryTimings />
      <Books searchQuery={searchQuery} />
      <Allbooks />
      <Ebook />
      <div>
        <p>Want to know how many seats are available right now ?</p>
        <button onClick={handleSeat}>Occupancy</button>
      </div>
      <Rules />
      <p>Your feedBack matters</p>
      <button onClick={() => navigate("/feedback")}>Give Feedback</button>
      <Help />
      <PreviousButton />
    </div>
  );
}
