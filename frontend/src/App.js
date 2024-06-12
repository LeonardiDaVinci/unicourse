import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";

import LoginPage from "./page/login";
import SignupPage from "./page/signup";
import Home from "./page/home";
import Homelog from './page/homelog';
import Course from "./page/course/course";
import Course1 from "./page/course/course1";
import Mylearning from "./page/mylearning";
import Cart from "./page/cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="" element={<Home />}></Route>
        <Route path="homelog" element={<Homelog />}></Route>
        <Route path="course" element={<Course />}></Route>
        <Route path="course1" element={<Course1 />}></Route>
        <Route path="mylearning" element={<Mylearning />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
