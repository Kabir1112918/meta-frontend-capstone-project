import logo from './assets/logo.jpg'
import { useState } from "react";
function Nav() {
  const [menuState, setmenuState] = useState(false);
  

  const toggleMenu = ()=>{
    setmenuState(!menuState);
  }
  return (
    <nav className={"navbar"}>
      <a href="#">
        <img src={logo} width="100px" height="50px" alt="logo" />
      </a>

      <a>
        <div class="menu-icon" onClick={toggleMenu}>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>


      </a>

      <ul className="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>


    </nav>

  );

}

export default Nav;
