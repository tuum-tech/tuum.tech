import React from "react";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <li className="nav-item dropdown">
      <Link href="/" className="nav-link" data-toggle="dropdown" role="button">
        <i className="ni ni-collection d-lg-none" />
        <span className="nav-link-inner--text">Learn</span>
      </Link>
      <div className="dropdown-menu">
        <a href="https://elastos.academy/" className="dropdown-item">
          Elastos Academy
        </a>
        <a href="https://elastos.info/" className="dropdown-item">
          Elastos Info
        </a>
        <a href="https://www.elastos.org/" className="dropdown-item">
          Elastos Official Site
        </a>
      </div>
    </li>
  );
};

export default Learn;
