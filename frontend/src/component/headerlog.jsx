import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo/logo.png";

const phoneNumber = "+62-8579-466-0986";
const address = "Alam Sutera, Tangerang, Indonesia";

let socialList = [
  {
    iconName: "icofont-twitter",
    siteLink: "#",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
  },
];

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  return (
    <header
      className={`header-section h-[64px] ${
        headerFiexd ? "header-fixed fadeInUp" : ""
      }`}
    >
       <div className={`header-top ${socialToggle ? "open scrolldown" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <ul className="lab-ul left">
              <li>
                <i className="icofont-ui-call"></i> <span>{phoneNumber}</span>
              </li>
              <li>
                <i className="icofont-location-pin"></i> {address}
              </li>
            </ul>
            <ul className="lab-ul social-icons d-flex align-items-center">
              <li>
                <p>Find us on: </p>
              </li>
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href={val.siteLink}>
                    <i className={val.iconName}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/homelog">
                <img style={{ width: "64px" }} src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="menu-area" style={{ color: "black" }}>
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <NavLink to="/homelog">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mylearning">My Learning</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart">Cart</NavLink>
                  </li>
                </ul>
              </div>

              <Link to="/" className="login">
                <i className="icofont-user"></i> <span>PROFILE</span>{" "}
              </Link>

              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className="ellepsis-bar d-lg-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
