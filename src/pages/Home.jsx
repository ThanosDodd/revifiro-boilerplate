import { Link } from "react-router-dom";
import "./Pages.css";

export default function Home() {
  return (
    <div className="page">
      <h1>My App</h1>

      <p className="subtitle">
        A simple personal tool built with React + Firebase.
      </p>

      <div className="actions">
        <Link to="/login">
          <button className="primary">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
