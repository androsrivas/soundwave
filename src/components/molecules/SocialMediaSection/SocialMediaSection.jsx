import SocialMedia from "../../atoms/SocialMedia/SocialMedia";
import twitter from "../../../assets/twitter.svg";
import facebook from "../../../assets/facebook.svg";
import "./SocialMediaSection.css";


function SocialMediaSection() {
  return (
    <section className="socialMediaSection">
        <SocialMedia logo={twitter} altText="Twitter Icon" text="Twitter"/>
        <SocialMedia logo={facebook}  altText="Facebook Icon" text="Facebook"/>
    </section>
  )
}

export default SocialMediaSection