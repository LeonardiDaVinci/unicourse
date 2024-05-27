import { Link } from "react-router-dom";

const newsTitle = "Want Us To Email You About Special Offers And Updates?";
const siteTitle = "Site Map";
const useTitle = "Useful Links";
const socialTitle = "Social Contact";
const supportTitle = "Our Support";

const siteList = [
  {
    text: "Documentation",
    link: "#",
  },
  {
    text: "Feedback",
    link: "#",
  },
  {
    text: "Plugins",
    link: "#",
  },
  {
    text: "Support Forums",
    link: "#",
  },
  {
    text: "Themes",
    link: "#",
  },
];

const useList = [
  {
    text: "About Us",
    link: "#",
  },
  {
    text: "Help Link",
    link: "#",
  },
  {
    text: "Terms & Conditions",
    link: "#",
  },
  {
    text: "Contact Us",
    link: "#",
  },
  {
    text: "Privacy Policy",
    link: "#",
  },
];

const socialList = [
  {
    text: "Facebook",
    link: "#",
  },
  {
    text: "Twitter",
    link: "#",
  },
  {
    text: "Instagram",
    link: "#",
  },
  {
    text: "YouTube",
    link: "#",
  },
  {
    text: "Github",
    link: "#",
  },
];

const supportList = [
  {
    text: "Help Center",
    link: "#",
  },
  {
    text: "Paid with Mollie",
    link: "#",
  },
  {
    text: "Status",
    link: "#",
  },
  {
    text: "Changelog",
    link: "#",
  },
  {
    text: "Contact Support",
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
                        <h4>{siteTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {siteList.map((val, i) => (
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
