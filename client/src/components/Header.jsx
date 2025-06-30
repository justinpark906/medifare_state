import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="new-header">
      <div className="logo-center">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="logo-icon" />
        </Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/hospitals">Hospitals</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </nav>
      <div className="auth-buttons">
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;