import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ isAuth }) => {
  const location = useLocation();
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        Home{" "}
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          Login
        </Link>
      ) : (
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faFilePen} />
            Post
          </Link>

          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            Log Out
          </Link>
        </>
      )}
    </nav>
  );
};
