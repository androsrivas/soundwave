
import "./Icon.css";

function Icon( { src, iconText } ) {
  return (
    <div className="iconContainer">
        <img src={ src }/>
        <p>{ iconText }</p> 
    </div>
  )
}

export default Icon