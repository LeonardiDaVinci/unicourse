import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';

import LoginPage from "./page/login";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;