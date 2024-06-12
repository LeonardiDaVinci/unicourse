import { Fragment } from "react";
import Footerlog from "../component/footerlog";
import Course from "../component/course";
import Headerlog from "../component/headerlog";

const Homelog = () => {
  return (
    <Fragment>
      <Headerlog/>
      <br />
      <br />
      <Course/>
      <Footerlog/>
    </Fragment>
  )
}

export default Homelog;