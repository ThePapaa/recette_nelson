import "./App.css";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import { NavLinks } from "./components/navlinks";
import Tests from "./tests/tests";
import Recipes from "./recipes/recipes";
import AllRecipes from "./recipes/allRecipes";
import Navbar from "./components/navbar";
import SideNav from "./components/sideNav";

function App() {
  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <section className="App">
      <Navbar
        clickFunction={() => {
          setOpenSideNav(!openSideNav);
        }}
      />
      <SideNav
        toggle={openSideNav}
        links={NavLinks}
        clickFunction={() => {
          setOpenSideNav(!openSideNav);
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/all-recipes" element={<AllRecipes />} />
      </Routes>
    </section>
  );
}

export default App;
