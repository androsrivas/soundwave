import { Outlet } from "react-router-dom";
import Header from "../components/molecules/Header/Header";
import Footer from "../components/molecules/Footer/Footer";

const Layout = () => {
  return (
    <>
        <Header />
        <main><Outlet /></main>
    </>
  )
}

export default Layout