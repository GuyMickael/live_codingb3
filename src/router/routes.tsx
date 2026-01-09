import type { RouteObject } from "react-router-dom";
import RootLayout from "./RootLayout";
import App from "../App";
import Test from "../components/Test";

const myRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Test />,
  },
];

export default myRoutes;
