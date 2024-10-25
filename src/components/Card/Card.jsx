import Button from "../Button/Button";
import "./Card.css"

function Card({title, text}) {
  return (
    <div className="cardContainer">
        <h1 className="title">{title}</h1>
        <p className="parraf">{text}</p>
        <Button btnText="Join Now"/>
    </div>
  )
}

export default Card