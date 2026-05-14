import { Link, Outlet } from "react-router";
import defaultCc from "../../assets/cc.png";

export default function AddCv() {
  return (
    <div className="addCv">
      <div className="defaultCv flex flex-col items-center justify-center">
        <Link to="default_CV">
          <img src={defaultCc} alt="Default CV Image" width="250px" />
        </Link>
        <h1 className="text-[20px]">Default blueprint</h1>
        <Outlet />
      </div>
    </div>
  );
}
