import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";

import LoginPage from "./page/login";
import SignupPage from "./page/signup";
import Home from "./page/home";
import CustomCursor from "./assets/js/customCursor";

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
