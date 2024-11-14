import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import './Logo.css';

function Logo({ alt, text }) {
  return (
      <NavLink to="/home" className="logo-container">
        <img className="logo" src={logo} alt={ alt }></img>
        <p>{ text }</p>
      </NavLink>
  )
}

export default Logo