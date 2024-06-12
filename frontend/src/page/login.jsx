import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header";
import PageHeader from "../component/pageheader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const title = "Welcome!";
const btnText = "Get in!";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        username: name,
        password: password,
      });
      navigate("/homelog");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

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
            <form className="account-form" onSubmit={Auth}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="User Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  
                  <Link to="/homelog"><span>{btnText}</span></Link>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <Link to="/signup">Sign Up</Link>
              </span>
            </div>
            <p className="text-center">{msg}</p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
