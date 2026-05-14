import App from "./App";
import Home from "./components/Home/Home";
import AddCv from "./components/Home/AddCv";
import DefaultCv from "./components/CV-Types/DefaultCv";
import type { JSX } from "react";
import { Outlet } from "react-router";

interface AppRoute {
  path?: string;
  element: JSX.Element;
  children?: ChildRoute[];
}

interface ChildRoute extends AppRoute {
  index?: boolean;
}

const routes: AppRoute[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      {
        path: "add_new_cv",
        element: (
          <div className="cvs-wrapper">
            <Outlet />
          </div>
        ),
        children: [
          { index: true, element: <AddCv /> },
          { path: "default_cv", element: <DefaultCv /> },
        ],
      },
    ],
  },
];

export default routes;
