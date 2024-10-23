import "./Nav.css"

function Nav(props) {
  return (
    <div className="navContainer">
        <a className="navLink" href={props.link1}>{props.text1}</a>
        <a className="navLink" href={props.link2}>{props.text2}</a>
    </div>
  )
}

export default Nav