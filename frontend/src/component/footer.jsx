import { Link } from "react-router-dom";

const newsTitle = "Want Us To Email You About Special Offers And Updates?";
const useTitle = "Useful Links";
const socialTitle = "Social Contact";
const supportTitle = "Our Product";


const useList = [
  {
    text: "About Us",
    link: "#",
  },
  {
    text: "Contact Us",
    link: "#",
  },
  {
    text: "Terms & Conditions",
    link: "#",
  },
  {
    text: "Privacy Policy",
    link: "#",
  },
];

const socialList = [
  {
    text: "Twitter",
    link: "#",
  },
  {
    text: "Instagram",
    link: "#",
  },
  {
    text: "Linkedin",
    link: "#",
  },
  {
    text: "Github",
    link: "#",
  },
];

const supportList = [
  {
    text: "Unicourse Plus",
    link: "#",
  },
  {
    text: "My Learning",
    link: "#",
  },
  {
    text: "My Schedule",
    link: "#",
  },
  {
    text: "Cart",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="news-footer-wrap">
      <div className="news-letter" style={{ background: "#0e1111" }}>
        <div className="container">
          <div className="section-wrapper">
            <div className="news-title">
              <h3>{newsTitle}</h3>
            </div>
            <div className="news-form">
              <form action="/">
                <div className="nf-list">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <input
                    type="submit"
                    name="submit"
                    value="Subscribe Now"
                    style={{ background: "#55ACEE" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div
          className="footer-top padding-tb pt-0"
          style={{ background: "#0e1111" }}
        >
          <div className="container">
            <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{useTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {useList.map((val, i) => (
                            <li key={i}>
                              <a href={val.link}>{val.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{socialTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {socialList.map((val, i) => (
                            <li key={i}>
                              <a href={val.link}>{val.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{supportTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {supportList.map((val, i) => (
                            <li key={i}>
                              <a href={val.link}>{val.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
