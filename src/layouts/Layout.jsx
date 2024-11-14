import { Outlet } from "react-router-dom";
import useScreenSize from "../hooks/ScreenSize/useScreenSize";
import Header from "../components/molecules/Header/Header";
import HeaderMobile from "../components/molecules/HeaderMobile/HeaderMobile";


const Layout = () => {
  const width = useScreenSize();
  return (
    <>
      {width < 768 ? <HeaderMobile /> : <Header />}
      <Outlet />
    </>
  )
}

export default Layout