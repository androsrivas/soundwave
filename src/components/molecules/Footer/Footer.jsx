
import SocialMediaSection from "../SocialMediaSection/SocialMediaSection";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerContainer">
        <section className="infoSection">
            <p>About Us</p>
            <p>Contact</p>
        </section>
        <SocialMediaSection className="socialMediaSection"/>
    </footer>
  )
}

export default Footer