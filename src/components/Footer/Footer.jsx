import SocialMedia from "../SocialMedia/SocialMedia";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
        <section className="infoSection">
            <p>About Us</p>
            <p>Contact</p>
        </section>
        <section className="socialSection">
            <SocialMedia logo={twitter} altText="Twitter Icon" text="Twitter"/>
            <SocialMedia logo={facebook}  altText="Facebook Icon" text="Facebook"/>
        </section>
    </div>
  )
}

export default Footer