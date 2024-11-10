import pic from "../../../assets/landing-page-girl.png";
import Button from "../../atoms/Button/Button";
import "./MainLanding.css";

function MainLanding() {
  return (
  <main className="landing-main-section">
    <section className="landing-image-section">
      <img className="img" src={ pic } alt="" />
    </section>
    <section className="landing-claim-section">
      <h1>Feel The Music</h1>
      <p>Stream over 20 thousand songs with one click</p>
      <Button btnText="Join Now!" className="btn-cta"/>
    </section>
  </main>
  )
}

export default MainLanding