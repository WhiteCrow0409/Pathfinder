import "./Footer.css";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <ul>
            <li>
              <a href="./about">About</a>
            </li>
            <li>
              <a href="./blog">Blog</a>
            </li>
            <li>
              <a href="./help">Help</a>
            </li>
            <li>
              <a href="./privacy">Privacy</a>
            </li>
            <li>
              <a href="./terms">Terms</a>
            </li>
            <li>
              <a href="./contact">Contact</a>
            </li>
            <li>
              <a href="./join-us">Join Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-info">
          <p className="footer-title">Pathfinder</p>
          <div className="social-icons">
            <a
              href="https://github.com/Counselllor/Counsellor-Web"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2023 Pathfinder. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;