import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Work from "./component/work/work";
import Testimonial from "./component/testimonial/Testimonial";
import Contacts from "./component/contacts/Contacts";
import Menu from "./component/menu/Menu";
import { useState } from "react";

import "./app.scss";
function App() {
  const [menuOpen, setMenuOpen]= useState(false);
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      
      <Intro/>
      <Portfolio/>
      <Work/>
      <Testimonial/>
      <Contacts/>

    </div>
    </div>
  );
}

export default App;
