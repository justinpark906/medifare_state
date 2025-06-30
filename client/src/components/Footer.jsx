import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-section">
          <h3>Medifare</h3>
          <p>Connecting patients with the right healthcare providers since 2023.</p>
        </div>
  
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>
  
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
  
        <div className="footer-section">
          <h4>Contact Us</h4>
          <form className="contact-form">
            <div className="name-fields">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
            </div>
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Your message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </footer>
    );
  }
  
  export default Footer;