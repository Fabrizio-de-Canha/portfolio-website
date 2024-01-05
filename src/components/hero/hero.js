import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const slidderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-250%",
    transition: {
      repeat: Infinity,
      duration: 40,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>FABRIZIO DE CANHA</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a href={`#Projects`} variants={textVariants}>My Work</motion.a>
            <motion.a href={`#Contact`} variants={textVariants}>Contact</motion.a>
            <motion.a href={`#Skills`} variants={textVariants}>Experience</motion.a>
          </motion.div>
        </motion.div>
      </div>
      {/* <div>
        <motion.button variants={textVariants}>My Work</motion.button>
        <motion.button variants={textVariants}>Contact</motion.button>
        <motion.a variants={textVariants}>Experience</motion.a>
      </div> */}

      <motion.div
        className="sliddingText"
        variants={slidderVariants}
        initial="initial"
        animate="animate"
      >
        Python React SQL CSS
      </motion.div>
      <motion.div
        className="heroImage"
        initial={{
          opacity: 0,
        }}
        animate={{opacity: 1}} transition={{duration: 3}}
      >
        <img src="/portrait2.png" />
      </motion.div>
    </div>
  );
};

export default Hero;
