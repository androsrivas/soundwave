import pic from "../../../assets/landing-page-girl.png";
import Button from "../../atoms/Button/Button";
import "./MainLanding.css";

function MainLanding() {
  return (
  <section className="mainSection">
    <img className="img" src={ pic } alt="" />
    <section className="claimSection">
      <h1>Feel The Music</h1>
      <p>Stream over 20 thousand songs with one click</p>
      <Button btnText="Join Now!" className="btn-cta"/>
    </section>
  </section>
  )
}

export default MainLanding