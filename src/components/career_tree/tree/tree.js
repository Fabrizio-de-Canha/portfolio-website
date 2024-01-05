import React from "react";
import "./tree.scss";

import { motion, useInView } from "framer-motion";

const variantsTree = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const Tree = () => {

  return (
    <motion.div
      variants={variantsTree}
      initial="initial"
      whileInView="animate"
      className="treeContainer"
    >
      <motion.div variants={variantsTree} className="treeCircle"></motion.div>
      <motion.div
        variants={variantsTree}
        className="treeRectangle"
      ></motion.div>
      <motion.div variants={variantsTree} className="treeCircle"></motion.div>
      <motion.div
        variants={variantsTree}
        className="treeRectangle"
      ></motion.div>
      <motion.div variants={variantsTree} className="treeCircle"></motion.div>
    </motion.div>
  );
};

export default Tree;
