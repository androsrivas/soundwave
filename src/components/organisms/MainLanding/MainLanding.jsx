import pic from "../../../assets/landing-page-girl.png";
import "./MainLanding.css";

function MainLanding() {
  return (
  
    <main className="mainContainer">
      <section className="claimSection">
        <img className="imgSection" src={ pic } alt="" />
        <h1>Feel The Music</h1>
        <p>Stream over 20 thousand songs with one click</p>
      </section>
    </main>  

    
    
  )
}

export default MainLanding