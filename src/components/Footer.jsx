import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="foot footback">
      <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://your-site.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Your Name
        </a>
      </p>
    </footer>
  );
}
