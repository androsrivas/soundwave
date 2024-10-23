import Button from "../Button/Button";
import "./Card.css"

function Card(props) {
  return (
    <div className="cardContainer">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Button btnText="Join Now"/>
    </div>
  )
}

export default Card