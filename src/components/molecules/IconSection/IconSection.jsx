import Icon from "../../atoms/Icon/Icon";
import microphone from "../../../assets/microphone.svg";
import albums from "../../../assets/albums.svg";
import more from "../../../assets/more.svg";
import "./IconSection.css";

function IconSection() {
  return (
    <section className="iconSection">
        <Icon src={ microphone } iconText="Charts" alt="microphone"/>
        <Icon src={ albums } iconText="Albums" alt="albums"/>
        <Icon src={ more } iconText="More" alt="more"/>
    </section>
)
}

export default IconSection