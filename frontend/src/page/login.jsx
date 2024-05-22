import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header";
import PageHeader from "../component/pageheader";

const title = "Welcome!";
const btnText = "Get in!";

const LoginPage = () => {
  return (
    <Fragment>  
      <Header />
      <PageHeader title={"Login Page"} curPage={"Login"} />
      <div
        className="login-section padding-tb section-bg"
        style={{ background: "#F5F5F5" }}
      >
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="User Name *" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to="/forgetpass">Forget Password?</Link>
                </div>
              </div>
              <div className="form-group text-center">
                <button
                  className="d-block lab-btn"
                  style={{ background: "#0e1111" }}
                >
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
