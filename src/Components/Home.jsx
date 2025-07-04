import { createContext, useContext, useState } from "react";
import { SearchContext } from "./SearchContext";
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
import Logoutbutton from "./Logoutbutton.jsx";
import logo from "../BookImages/RULOGO.png";
import profile from "../BookImages/ProfileIcon.png";
import ProfileList from "./ProfileList.jsx";
export const myMenuContext = createContext();
export default function Home() {
  const { setSearchQuery } = useContext(SearchContext);
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  function handleShow() {
    // navigate("/MenuList");
    setProfileOpen((prev) => !prev);
  }
  console.log(profileOpen);

  function handleSeat() {
    navigate("/occupancy");
  }

  function handleSearch() {
    setSearchQuery(inputValue);
  }

  return (
    <div className={styles.maincontainer}>
      <div className={styles.mainHeading}>
        <div className={styles.logoDiv}>
          <img className={styles.imagestyle} src={logo} alt="" />
        </div>
        Library Space
        <button onClick={handleShow} className={styles.buttondiv}>
          <img className={styles.buttonImage} src={profile} alt="" />
        </button>
        <myMenuContext.Provider value={{ handleShow }}>
          {profileOpen && <ProfileList />}
        </myMenuContext.Provider>
      </div>
      <div className={styles.searchbar}>
        <Search
          value={inputValue}
          onChange={setInputValue}
          onSearch={handleSearch}
        />
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
