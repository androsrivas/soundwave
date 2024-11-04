import MainLanding from "../components/organisms/MainLanding/MainLanding";
import MainDiscover from "../components/organisms/MainDiscover/MainDiscover";
import MainJoin from "../components/organisms/MainJoin/MainJoin";
// import Header from "../components/molecules/Header/Header";
// import Footer from "../components/molecules/Footer/Footer";

function Landing() {
  return (
    <>
      {/* <Header /> */}
      <MainLanding />
      <MainDiscover />
      <MainJoin />
      {/* <Footer /> */}
    </>
  )
}

export default Landing