import { Fragment } from "react";
import Footerlog from "../component/footerlog";
import Learning from "../component/learning";
import Headerlog from "../component/headerlog";

const Mylearning = () => {
  return (
    <Fragment>
      <Headerlog/>
      <br />
      <br />
      <Learning/>
      <Footerlog/>
    </Fragment>
  )
}

export default Mylearning;