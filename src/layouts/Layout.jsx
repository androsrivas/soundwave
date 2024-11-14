import { Outlet } from "react-router-dom";
import Header from "../components/molecules/Header/Header";


const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Layout