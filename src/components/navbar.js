import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "./navlinks";
import { useState } from "react";

const Navbar = () => {
  const [openSideNav, setOpenSideNav] = useState(false);

  let linkHeight = 100 / NavLinks.length;
  return (
    <nav className="home-nav-bar">
      <div className="logo">
        <Link to="/">
          <h1>RECETTE</h1>
        </Link>
      </div>
      <ul className="flex-row">
        <li>
          <Link to="#">
            <i className="fa-solid fa-magnifying-glass"></i> FIND RECIPES
          </Link>
        </li>
        <li>
          <Link to="/tests">TEST SITE</Link>
        </li>
        <li>
          <Link to="recipes">POST RECIPE</Link>
        </li>
        <li>
          <Link to="/">CREATE ACCOUNT</Link>
        </li>
      </ul>
      <div className="menu-bar">
        <button
          className="menu-btn"
          onClick={() => {
            setOpenSideNav(!openSideNav);
          }}
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="sidenav">
        <div className="links-list">
          {NavLinks.map((item, index) => {
            return (
              <Link to={item.url}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
