import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navi from "./Components/Navi";
import Signin from "./Components/Signin";

export default function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        {/* default page  */}
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to the Home Page</h1>
              <p>Click on a button to Start.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
