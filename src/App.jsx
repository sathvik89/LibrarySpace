import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navi from "./Components/Navi";
import Signin from "./Components/Signin";
import Seating from "./Components/Seating";
import ReserveSeat from "./Components/SeatReserve";
import FeedBack from "./Components/Feedback";
import Mainpage from "./Components/Mainpage";
import RightsReserved from "./Components/rightsReserved";
import { SearchProvider } from "./Components/SearchContext";
import ProfileList from "./Components/ProfileList";
import Profile from "./Components/Profile";
import Billings from "./Components/Billings";
import Settings from "./Components/Settings";
import Historyy from "./Components/History";
import ProfileEdit from "./Components/ProfileEdit";
import ProfileContext from "./context/ProfileContext";

export default function App() {
  const [available, setavailabe] = React.useState(220);
  const [reserve, setReserve] = React.useState(false);

  function handleSeat() {
    setReserve((prev) => !prev);
    setavailabe((prev) => prev - 1);
  }

  function handleSeatcount() {
    setavailabe((prev) => prev - 1);
  }

  return (
    <BrowserRouter>
      <SearchProvider>
        <Navi />
        <ProfileContext>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />

            <Route path="/home" element={<Home />} />
            <Route
              path="/occupancy"
              element={<Seating available={available} />}
            />
            <Route
              path="/reserveseat"
              element={
                <ReserveSeat
                  reserve={reserve}
                  onClick={(handleSeatcount, handleSeat)}
                />
              }
            />
            <Route path="/feedback" element={<FeedBack />} />
            <Route path="/MenuList" element={<ProfileList />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/profileEdit" element={<ProfileEdit />} />

            <Route path="/billings" element={<Billings />} />
            <Route path="/history" element={<Historyy />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </ProfileContext>
        <RightsReserved />
      </SearchProvider>
    </BrowserRouter>
  );
}
