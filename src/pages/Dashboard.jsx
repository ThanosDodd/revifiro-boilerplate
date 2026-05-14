import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../firebase/firebase";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      {user ? (
        <div>
          <p>Logged in as: {user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <Link to="/login">Go to Login</Link>
        </div>
      )}
    </div>
  );
}
