import "./App.css";
import { useState } from "react";
import { NavLinks } from "./components/navlinks";
import { Navbar, SideNav, NavigationRoutes } from "./components/navbar";

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
      <NavigationRoutes />
    </section>
  );
}

export default App;
