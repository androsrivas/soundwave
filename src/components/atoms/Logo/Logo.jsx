import logo from "../../../assets/logo.png";
import './Logo.css';

function Logo({ alt, text }) {
  return (
    <div className="logoContainer">
      <img className="logo" src={logo} alt={ alt }></img>
      <p>{ text }</p>
    </div> 
  )
}

export default Logo