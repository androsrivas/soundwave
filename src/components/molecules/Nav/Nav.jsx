import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <section className="navContainer">
      <NavLink to="/discover" className="navLink">Discover</NavLink>
      <NavLink to="/join" className="navLink">Join</NavLink>
    </section>
  )
}

export default Nav