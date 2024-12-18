import Button from "../../atoms/Button/Button";
import "./MainJoin.css";

function MainJoin() {
  return (
    <div className="join-main-container">
      <section className="join-claim-section">
        <p className="claim">Join the <span>fun.</span></p>
      </section>
      <section className="join-form-section">
        <form action="#" className="form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"/>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email"/>
          <label htmlFor="pass">Password:</label>
          <input type="text" id="pass"/>
          <Button btnText="Join Now" className="btn-cta"/>
        </form>
      </section>
    </div>
  )
}

export default MainJoin