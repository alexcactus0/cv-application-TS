import { Link } from "react-router";
import "../../styles/home.css";

export default function Home() {
  return (
    <div className="homeCon flex flex-col justify-center items-center gap-[6em] h-[50%] w-[100%]">
      <h1>Home page</h1>
      <Link to="/add_new_cv">
        <button className="newCvBtn rounded-xl h-12 w-34">Create New CV</button>
      </Link>
    </div>
  );
}
