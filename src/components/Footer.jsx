import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer">
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
        <div className="footer">
          <p className="footer-heading">Quick Links</p>
          <p className="footer-list">About us</p>
          <p className="footer-list">Contact Us</p>
          <p className="footer-list">Categories</p>
          <p className="footer-list">Events</p>
        </div>
        <div className="footer">
          <p className="footer-heading">Terms and Conditions</p>
          <p className="footer-list"></p>
          <p className="footer-list">Privacy Policy</p>
          <p className="footer-list">FAQs</p>
        </div>
        <div className="footer-three">
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
