import { Link } from "react-router-dom";


const Navbar = (props) => {
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
          onClick={props.clickFunction}
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
     
    </nav>
    
  );
};

export default Navbar;
