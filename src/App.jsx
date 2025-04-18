import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navi from "./Components/Navi";
import Signin from "./Components/Signin";
import Seating from "./Components/Seating";
import ReserveSeat from "./Components/SeatReserve";

export default function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to the Home Page</h1>
              <p>Click on a button to Start.</p>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/occupancy" element={<Seating />} />
        <Route path="/reserveseat" element={<ReserveSeat />} />
        {/* default page  */}
      </Routes>
    </BrowserRouter>
  );
}
