import Logo from "../Logo/Logo.jsx";
import Nav from "../../Nav/Nav.jsx";
import "./Header.css";

function Header() {
  return (
    <header className="headerContainer">
      <Logo alt="Soundwave logo" text="Soundwave"/>
      <Nav />
    </header>
  )
}

export default Header