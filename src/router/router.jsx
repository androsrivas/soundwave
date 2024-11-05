import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import MainLanding from "../components/organisms/MainLanding/MainLanding";
import MainDiscover from "../components/organisms/MainDiscover/MainDiscover";
import MainJoin from "../components/organisms/MainJoin/MainJoin";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <MainLanding />
            },
            {
                path: "/discover",
                element: <MainDiscover />
            },
            {
                path: "/join",
                element: <MainJoin />
            }
        ]
    }
]);