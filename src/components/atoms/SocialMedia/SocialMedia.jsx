import "./SocialMedia.css";


function SocialMedia({logo, alt, text}) {
  return (
    <section className="socialMediaContainer">
        <img src={ logo } alt={ alt } />
        <p>{ text }</p>
    </section>
  )
}

export default SocialMedia