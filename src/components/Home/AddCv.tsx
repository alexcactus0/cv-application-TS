import { Link, Outlet } from "react-router";
import defaultCc from "../../assets/cc.png";

export default function AddCv() {
  return (
    <div className="addCv">
      <div className="defaultCv">
        <Link to="default_CV">
          <img src={defaultCc} alt="Default CV Image" width="300px" />
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
