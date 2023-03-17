import {motion} from "framer-motion";
import "./navbar.scss";

const Navbar = () => {
  const pathname = window.location.pathname;
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a className="nav-link" href="/">
            Home
          </a>
          <motion.div
            className="line"
            transition={{duration: 0.75}}
            initial={{width: "0%"}}
            animate={{width: pathname === "/" ? "100%" : "0%"}}
          />
        </li>
        <li>
          <a className="nav-link" href="/list">
            List
          </a>
          <motion.div
            className="line"
            transition={{duration: 0.75}}
            initial={{width: "0%"}}
            animate={{width: pathname === "/list" ? "100%" : "0%"}}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
