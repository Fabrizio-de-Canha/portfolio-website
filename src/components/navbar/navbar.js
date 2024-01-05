import "./navbar.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Menu from "../menu/menu";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Menu />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {" "}
          About Me
        </motion.span>
        <div className="socials">
          <a href="https://www.linkedin.com/in/fabrizio-de-canha-52ba721b4/">
            <LinkedInIcon fontSize="large"/>
          </a>
          <a href="https://www.linkedin.com/in/fabrizio-de-canha-52ba721b4/">
            <GitHubIcon fontSize="large"/>
          </a>
          <a href="https://www.linkedin.com/in/fabrizio-de-canha-52ba721b4/">
            <InstagramIcon fontSize="large"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
