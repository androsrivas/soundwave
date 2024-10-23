import Logo from "../Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";
// import Discover from "../../pages/Discover/Discover.jsx";
// import Join from "../../pages/Join/Join.jsx";
import "./Header.css";

function Header() {
  return (
    <div className="headerContainer">
      <Logo altText="Soundwave logo" text="Soundwave"/>
      <Nav link1="Discover" text1="Discover" link2="Join" text2="Join"/>
    </div>
  )
}

export default Header