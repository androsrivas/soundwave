import pic from "../../../assets/covers.jpg";
import IconSection from "../../molecules/IconSection/IconSection";
import "./MainDiscover.css";

function MainDiscover() {
  return (
    <div className="discover-main-container">
      <section className="discover-claim">
        <h2>Discover new music</h2>
        <IconSection />
        <p>By joining you can benefit by listening to the latest albums released.</p>
      </section>
        <img src={ pic } alt="Covers" className="covers"></img>
    </div>
  )
}

export default MainDiscover