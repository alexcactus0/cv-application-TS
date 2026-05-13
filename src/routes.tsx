import App from "./App";
import Home from "./components/Home/Home";
import AddCv from "./components/Home/AddCv";
import DefaultCv from "./components/CV-Types/DefaultCv";
import type { JSX } from "react";

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
        element: <AddCv />,
        children: [{ path: "default_CV", element: <DefaultCv /> }],
      },
    ],
  },
];

export default routes;
