import Link from "../../atoms/Link/Link";
import Discover from "../../organisms/Discover/Discover";
import Join from "../../organisms/Join/Join";
import "./Nav.css";

function Nav() {
  return (
    <section className="navContainer">
       <Link href={ Discover } text="Discover"/>
       <Link href={ Join } text="Join" /> 
    </section>
  )
}

export default Nav