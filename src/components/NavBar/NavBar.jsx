import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>BookNook</b>
          </Link>
        </li>
        <li className="search">
          <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
            <p>Search</p>
          </Link>
        </li>
        <li className="favorites">
          <Link
            to="/favorites"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>Favorites</p>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
