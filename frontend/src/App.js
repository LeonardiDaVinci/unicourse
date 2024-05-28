import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";

import LoginPage from "./page/login";
import SignupPage from "./page/signup";
import Home from "./page/home";
import Course from "./page/course/course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="" element={<Home />}></Route>
        <Route path="course" element={<Course />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
