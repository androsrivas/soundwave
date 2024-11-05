import Logo from "../../atoms/Logo/Logo";
import Nav from "../../molecules/Nav/Nav";
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