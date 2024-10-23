import logo from "../../assets/logo.png";
import '../Logo/Logo.css';

function Logo(props) {
  return (
    <div className="logoContainer">
      <img className="logo" src={logo} alt={props.altText}></img>
      <p className="logoText">{props.text}</p>
    </div> 
  )
}

export default Logo