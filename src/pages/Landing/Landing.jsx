import MainLanding from "../../components/organisms/MainLanding/MainLanding";
import Circle from "../../components/atoms/Circle/Circle";
import "./Landing.css";

function Landing() {
  return (
    <>
      <MainLanding />
      <Circle className="circle1"/>
      <Circle className="circle2"/>
      <Circle className="circle3"/>
    </>
  )
}

export default Landing