import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignup() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // alert("Logged in");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={handleLogin}>Login</button>

      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
