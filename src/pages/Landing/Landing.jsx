import MainLanding from "../../components/organisms/MainLanding/MainLanding";
import Circle from "../../components/atoms/Circle/Circle";
import "./Landing.css";

function Landing() {
  return (
    <>
      <div className="main-landing">
        <MainLanding />
      </div>
      <div className="circles-bg">
        <Circle className="lan-circle1"/>
        <Circle className="lan-circle2"/>
        <Circle className="lan-circle3"/>
      </div>
    </>
  )
}

export default Landing