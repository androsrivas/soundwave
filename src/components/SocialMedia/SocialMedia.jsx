import "./SocialMedia.css";


function SocialMedia(props) {
  return (
    <div className="container">
        <img className="icon" src={props.logo} alt={props.altText} />
        <p>{props.text}</p>
    </div>
  )
}

export default SocialMedia