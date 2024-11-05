import { Outlet } from "react-router-dom";
import Header from "../components/molecules/Header/Header";
import Landing from "../pages/Landing/Landing";

const Layout = () => {
  return (
    <>
        <Header />
        <main><Outlet /></main>
    </>
  )
}

export default Layout