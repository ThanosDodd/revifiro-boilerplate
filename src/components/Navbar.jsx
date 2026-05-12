import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="left">
        <Link to="/" className="link">
          App
        </Link>
      </div>

      <div className="right">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/login" className="link">
          Login
        </Link>
        <Link to="/dashboard" className="link">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
