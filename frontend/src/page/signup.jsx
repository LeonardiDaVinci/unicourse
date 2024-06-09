import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import Footer from "../component/footer";
import PageHeader from "../component/pageheader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const title = "Register Now";
const btnText = "Get Started Now";

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const navigate = useNavigate();
  const [msg, setMsg] = useState('')

  const Register = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', {
        username: name,
        email: email,
        password: password,
        confPassword: confPassword
      });
      navigate('/login')
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
    }
  }
  
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
            <form className="account-form" onSubmit={ Register }>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  value={name} onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="password"
                  placeholder="Confirm Password"
                  value={confPassword} onChange={(e) => setConfPassword(e.target.value)}
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
            <p className="text-center">{msg}</p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignupPage;
