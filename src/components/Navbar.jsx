import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <nav className="nav navback">
      <div className="left">
        <Link to="/" className="link">
          <img src="/appicon.png" alt="App logo" className="logo" />
        </Link>
      </div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`menu ${menuOpen ? "open" : ""}`}>
        {menuOpen && (
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            ✕
          </button>
        )}

        <div className="center">
          <Link
            to="/thing1"
            className="link"
            onClick={() => setMenuOpen(false)}
          >
            Thing 1
          </Link>

          <Link
            to="/thing2"
            className="link"
            onClick={() => setMenuOpen(false)}
          >
            Thing 2
          </Link>
        </div>

        <div className="right">
          {user ? (
            <Link
              to="/dashboard"
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
