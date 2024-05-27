import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import Footer from "../component/footer";
import PageHeader from "../component/pageheader";
import axios from "axios";

const title = "Register Now";
const btnText = "Get Started Now";

const SignupPage = () => {
  const [values, setvalues] = useState({
    username: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, confPassword } = values; 
    if (password === confPassword) {
      axios
        .post("http://localhost:8081/register", values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err)); 
    } else {
      console.log("Passwords do not match"); 
    }
  };
  
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Register Now"} curPage={"Sign Up"} />
      <div
        className="login-section padding-tb section-bg"
        style={{ background: "#F5F5F5" }}
      >
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  onChange={(e) =>
                    setvalues({ ...values, username: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setvalues({ ...values, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setvalues({ ...values, password: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="password"
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    setvalues({ ...values, confPassword: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <button className="lab-btn" style={{ background: "#0e1111" }}>
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Already have account? <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignupPage;
