import MainLanding from "../../components/organisms/MainLanding/MainLanding";
import Circle from "../../components/atoms/Circle/Circle";
import "./Landing.css";

function Landing() {
  return (
    <>
      <MainLanding />
      <Circle className="lan-circle1"/>
      <Circle className="lan-circle2"/>
      <Circle className="lan-circle3"/>
    </>
  )
}

export default Landing