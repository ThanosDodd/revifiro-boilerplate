import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase/firebase";

import "./Navbar.css";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="nav">
      <div className="left">
        <Link to="/" className="link">
          APP
        </Link>
      </div>

      <div className="right">
        {user ? (
          <Link to="/dashboard" className="link">
            Dashboard
          </Link>
        ) : (
          <Link to="/login" className="link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
