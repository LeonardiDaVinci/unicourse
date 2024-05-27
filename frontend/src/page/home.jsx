import { Fragment } from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import Banner from "../component/banner"
import Category from "../component/category";
import Course from "../component/course";
import Clients from "../component/clients";
import Instructor from "../component/instructor";

const Home = () => {
  return (
    <Fragment>
      <Header/>
      <Banner/>
      <Category/>
      <Course/>
      <Clients/>
      <Instructor/>
      <Footer/>
    </Fragment>
  )
}

export default Home;