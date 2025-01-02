import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { ModeToggle } from "../mode-toggle";
const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="h-10" />
        <h1 className="ml-2 text-2xl font-bold">Planify</h1>
      </Link>
      <Link to="/">Tasks</Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
