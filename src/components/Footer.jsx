import siteConfig from "../config/site";

import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="foot footback">
      <Link to="/terms" className="footer-a-tag">
        Terms and Conditions
      </Link>
      {" | "}
      <Link to="/privacy" className="footer-a-tag">
        Privacy Policy
      </Link>

      <br />
      <br />

      <p>
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>

      <p>
        Made with ❤️ by{" "}
        <a
          href={siteConfig.links.website}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-a-tag"
        >
          {siteConfig.creatorName}
        </a>
      </p>
    </footer>
  );
}
