import Card from "../../components/Card/Card";
// import Circle from "../../components/Circle/Circle";
import pic from "../../assets/landing-page-girl.png";
import "./Landing.css";

function Landing() {
  return (
  
    <main className="mainContainer">
      {/* <Circle className="circle1"/>
      <Circle className="circle2"/>
      <Circle className="circle3"/> */}
      <section className="section1">
        <img className="imgSection" src={pic} alt="" />
        <Card title="Feel The Music" text="Stream over 20 thousand songs with one click"/>
      </section>
    </main>  

    
    
  )
}

export default Landing