import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../firebase/firebase";

import "./Pages.css";

export default function Dashboard() {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  const user = auth.currentUser;

  useEffect(() => {
    async function fetchUserData() {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setIsPremium(docSnap.data().isPremium || false);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  async function handleUpgrade() {
    // placeholder for Stripe flow
    alert("Stripe checkout will go here");
  }

  if (loading) {
    return (
      <div className="page">
        <h1>Dashboard</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Dashboard</h1>

      {user && <p>Logged in as: {user.email}</p>}
      <button onClick={handleSignOut}>Sign Out</button>

      <br />
      <br />

      {!isPremium && (
        <div className="premium-card">
          <h2>Upgrade to Premium</h2>

          <p className="price">$5 / year</p>

          <p>
            Get unlimited access to all features and support ongoing
            development.
          </p>

          <ul className="benefits">
            <li>✔ Unlimited usage</li>
            <li>✔ Priority features</li>
            <li>✔ Early access to new tools</li>
            <li>✔ Support the project</li>
          </ul>

          <button onClick={handleUpgrade}>Upgrade Now</button>
        </div>
      )}
    </div>
  );
}
