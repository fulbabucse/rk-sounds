import { createBrowserRouter } from "react-router-dom";
import Team from "../components/Team";
import Root from "../layouts/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "/contact-us", element: <Team /> },
]);

export default router;
