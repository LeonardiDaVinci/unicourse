import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo  from "../assets/images/logo/logo.png";

const phoneNumber = "+62-8579-466-0986";
const address = "Alam Sutera, Tangerang, Indonesia";


let socialList = [
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: "#"
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: "#"
    }
]

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
        <header className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <ul className="lab-ul left">
                            <li><i className="icofont-ui-call"></i> <span>{phoneNumber}</span></li>
                            <li><i className="icofont-location-pin"></i> {address}</li>
                        </ul>
                        <ul className="lab-ul social-icons d-flex align-items-center">
                            <li><p>Find us on : </p></li>
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink}><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/"><img style={{ width: "80px" }} src= { Logo } alt="logo" /></Link>
                        </div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><NavLink to="/home">Home</NavLink></li>
                                    <li>
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Categories</a>
                                        <ul className="lab-ul dropdown-menu">
                                            {/* Rencana mau bikin kayak categories di udemy */}
                                            <li>
                                                
                                            </li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/blog">Blog</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>
                            
                            <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                            <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span> </Link>

                            <div className={`header-bar d-lg-none ${menuToggle ? "active" : "" }`} onClick={() => setMenuToggle(!menuToggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="ellepsis-bar d-lg-none" onClick={() => setSocialToggle(!socialToggle)}>
                                <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;