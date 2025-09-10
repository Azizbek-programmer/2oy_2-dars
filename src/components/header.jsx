import { Link, NavLink, useLocation, useParams } from "react-router-dom";

const Header = () => {                              

  return (
    <header className="text-black">
      <nav className="container mx-auto flex justify-between items-center h-20">
        <ul className="flex gap-4">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
