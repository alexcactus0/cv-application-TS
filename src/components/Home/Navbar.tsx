import { useNavigate } from "react-router";
import { Link } from "react-router";
import backArr from "../../assets/backArr.svg";
import home from "../../assets/home.svg";

export default function Navbar() {
  const navigate = useNavigate();

  function handleBack() {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <nav className="navbar flex justify-between">
      <img src={backArr} onClick={handleBack} alt="Back Arrow Icon" />
      <Link to="/home">
        <img src={home} alt="Home Icon" />
      </Link>
    </nav>
  );
}
