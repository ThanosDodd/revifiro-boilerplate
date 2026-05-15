import { Link } from "react-router-dom";

import siteConfig from "../config/site";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="foot footback">
      <p>
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
      <p>
        Made with ❤️ by{" "}
        <a
          href={siteConfig.links.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.creatorName}
        </a>
      </p>
    </footer>
  );
}
