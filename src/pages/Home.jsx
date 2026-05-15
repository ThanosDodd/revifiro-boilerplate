import siteConfig from "../config/site";

import { Link } from "react-router-dom";

import "./Pages.css";

export default function Home() {
  return (
    <div className="page">
      <h1>{siteConfig.name}</h1>

      <p className="subtitle">
        {siteConfig.tagline}
      </p>
    </div>
  );
}
