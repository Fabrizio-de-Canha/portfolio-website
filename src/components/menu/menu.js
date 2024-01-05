import React, { useState } from "react";
import { motion } from "framer-motion";
import "./menu.scss";
import Links from "./links";
import Toggle from "./toggle";

const Menu = () => {

  const [open, setOpen] = useState(false);

  const variants ={
    open: {
      clipPath: "circle(600px at 50px 50px)",
      transition: {
        type: "spring",
        damping: 100,
        stiffness: 300

      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 150
      }
    }
  }


  return (
    <motion.div className="menu" animate={open? "open": "closed"}>
      <motion.div className="back" variants={variants}>
        <Links setOpen={setOpen}/>
      </motion.div>
      <Toggle setOpen={setOpen} isOpen={open}/>
    </motion.div>
  );
};

export default Menu;
