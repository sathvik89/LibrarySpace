import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navi from "./Components/Navi";
import Signin from "./Components/Signin";
import Seating from "./Components/Seating";
import ReserveSeat from "./Components/SeatReserve";
import { useState } from "react";
import FeedBack from "./Components/Feedback";
import Mainpage from "./Components/Mainpage";
import RightsReserved from "./Components/rightsReserved";

export default function App() {
  const [available, setavailabe] = useState(220);
  const [reserve, setReserve] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  function handleSeat() {
    setReserve((prev) => !prev);
    setavailabe((prev) => prev - 1);
  }
  function handleSeatcount() {
    setavailabe((prev) => prev - 1);
  }
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/home"
          element={
            <Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          }
        />
        <Route path="/occupancy" element={<Seating available={available} />} />
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
      </Routes>
      <RightsReserved />
    </BrowserRouter>
  );
}
