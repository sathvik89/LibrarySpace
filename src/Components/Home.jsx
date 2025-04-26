import { useContext } from "react";
import { SearchContext } from "./SearchContext"; // Adjust the path as needed
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
import News from "./News.jsx";
import styles from "../Styles/Home.module.css";
import RU from "../BookImages/RUimage.png";
import Logoutbutton from "./Logoutbutton.jsx";

export default function Home() {
  // Use the context to access searchQuery and setSearchQuery
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const navigate = useNavigate();

  function handleSeat() {
    navigate("/occupancy");
  }

  return (
    <div className={styles.maincontainer}>
      <div className={styles.mainHeading}>Library Space</div>
      <div className={styles.searchbar}>
        <Search value={searchQuery} onChange={setSearchQuery} />
        <PresentDay />
      </div>
      <div className={styles.librarytime}>
        <LibraryTimings />
      </div>
      <div className={styles.news}>
        <News />
      </div>
      <div className={styles.latestbooks}>
        <Books />
      </div>
      <div className={styles.allbooks}>
        <Allbooks />
      </div>
      <div className={styles.ebooks}>
        <Ebook />
      </div>
      <div className={styles.population}>
        <div className={styles.innerPop}>
          <h3>Current Seat Availability</h3>

          <p>
            Want to know how many seats are available right now? Click the
            button below to check the occupancy status.
          </p>

          <button onClick={handleSeat}>Check Occupancy</button>
        </div>
      </div>
      <div className={styles.rules}>
        <Rules />
      </div>

      <div className={styles.feedback}>
        <h3>Your Feedback Matters!</h3>

        <p>
          Help us improve by sharing your thoughts. Your feedback is valuable to
          us and helps us serve you better.
        </p>

        <button onClick={() => navigate("/feedback")}>Give Feedback</button>
      </div>
      <div className={styles.help}>
        <Help />
      </div>
      <div className={styles.previous}>
        <PreviousButton />
        <Logoutbutton />
      </div>
    </div>
  );
}
