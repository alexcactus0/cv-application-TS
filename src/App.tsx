import Navbar from "./components/Home/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
