import React from "react";
import "./career.scss";
import Tree from "./tree/tree";
import { motion } from "framer-motion";

const variantLeft = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const variantRight = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
};

const CareerTree = () => {
  return (
    <div className="careerTree">
      <motion.div
        variants={variantLeft}
        initial="initial"
        className="leftContainer"
        whileInView="animate"
      >
        <motion.div variants={variantLeft} className="jobDetails">
          <h1>2016-2020: University of Pretoria</h1>
        </motion.div>
        <div style={{ flex: 0.5 }}></div>
        <motion.div variants={variantLeft} className="jobDetails">
          <h1>2022-Present: Ctrack</h1>
        </motion.div>
      </motion.div>
      <div className="treeOuterContainer" style={{ opacity: 0.5 }}>
        <Tree />
      </div>
      <div className="leftContainer">
        <div style={{ flex: 0.5 }}></div>
        <motion.div
          variants={variantRight}
          initial="initial"
          className="jobDetails"
          whileInView="animate"
        >
          <h1>2021-2022: Docwize</h1>
        </motion.div>
        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
};

export default CareerTree;
