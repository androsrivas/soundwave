import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Discover from "../pages/Discover/Discover";
import Join from "../pages/Join/Join";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Landing />
            },
            {
                path: "/discover",
                element: <Discover />
            },
            {
                path: "/join",
                element: <Join />
            }
        ]
    }
]);