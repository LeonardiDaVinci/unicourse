import { Fragment } from "react";
import Footerlog from "../component/footerlog";
import Cartitem from "../component/cartitem";
import Headerlog from "../component/headerlog";

const Cart = () => {
  return (
    <Fragment>
      <Headerlog/>
      <br />
      <br />
      <Cartitem/>
      <Footerlog/>
    </Fragment>
  )
}

export default Cart;