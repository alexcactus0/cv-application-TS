import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/add_new_cv">Create New CV</Link>
    </>
  );
}
