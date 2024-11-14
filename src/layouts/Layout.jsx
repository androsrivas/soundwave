import { Outlet } from "react-router-dom";
import Header from "../components/molecules/Header/Header";


const Layout = () => {
  return (
    <main className="main">
        <Header />
        <Outlet />
    </main>
  )
}

export default Layout