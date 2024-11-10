import MainJoin from "../../components/organisms/MainJoin/MainJoin";
import Footer from "../../components/molecules/Footer/Footer";
import Circle from "../../components/atoms/Circle/Circle";
import "./Join.css";

const Join = () => {
  return (
    <>
        <Circle className="join-circle1"/>
        <Circle className="join-circle2"/>
        <MainJoin />
        <Footer />
    </>
  )
}

export default Join