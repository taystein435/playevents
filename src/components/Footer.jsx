import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer footer-contact">
          {/* <img src="" alt="" className="footer-logo" /> */}
          <p className="footer-heading">Contact Us</p>
          <p className="footer-list">
            Play Events Limited,
            Devonshire house, Herts, WD6 1QQ
          </p>
          <p className="footer-list">07 321 546 8764</p>
          <p className="footer-list">support@playents.com</p>
          <p className="footer-list">www.playevents.com</p>
        </div>
        <div className="footer footer-links">
          <p className="footer-heading">Quick Links</p>
          <Link to="/about" className="footer-link">
            <p className="footer-list">About us</p>
          </Link>
          <Link to="/contact" className="footer-link">
            <p className="footer-list">Contact Us</p>
          </Link>
          <Link to="/events" className="footer-link">
            <p className="footer-list">Categories</p>
          </Link>
          <Link to="/events" className="footer-link">
            <p className="footer-list">Events</p>
          </Link>
        </div>
        <div className="footer footer-terms">
          <p className="footer-heading">Terms and Conditions</p>
          <p className="footer-list"></p>
          <p className="footer-list">Privacy Policy</p>
          <p className="footer-list">FAQs</p>
        </div>
        <div className="footer footer-social">
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
          <YouTubeIcon />
        </div>
      </div>
      <p className="copyright">Copyright 2024 | All Rights Reserved</p>
    </div>
  );
}

export default Footer;