import { signOut } from "firebase/auth";

import { auth } from "../firebase/firebase";

import "./Pages.css";

export default function Dashboard() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <p>Logged in as: {auth.currentUser.email}</p>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
