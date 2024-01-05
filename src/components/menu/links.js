import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.01,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0.5,
  },
};

const Links = ({ setOpen }) => {
  const links = [
    { name: "Homepage", link: "" },
    { name: "About Me", link: "" },
    { name: "Skills", link: "" },
    { name: "Projects", link: "" },
    { name: "Contact", link: "" },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {links.map((item) => (
        <motion.a
          href={`#${item.name}`}
          key={item.name}
          onClick={() => {
            setOpen(false);
          }}
          variants={itemVariants}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
