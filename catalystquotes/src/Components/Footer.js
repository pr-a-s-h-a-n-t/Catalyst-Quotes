import "./Footer.css";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <NewsLetter />

          <div className="copyright">
            <ul>
              <li>Made with ❤️</li>
              <li>Copyright © 2022, Catalyst Quotes.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
