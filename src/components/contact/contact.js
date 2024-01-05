import React from "react";
import "./contact.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1
    },
  },
};

const footerVariant = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 0.6,
    transition: {
      duration: 2
    },
  },
};

function Contact() {
  return (
    <div className="contact">
      <motion.div
        className="contactSection"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}> Contact Me</motion.h1>
          <motion.div className="contactItem" variants={variants}>
            <h2>Email</h2>
            <span>fabriziodecanha@gmail.com</span>
          </motion.div>
          <motion.div className="contactItem" variants={variants}>
            <h2>Phone Number</h2>
            <span>+27(0) 848537720</span>
          </motion.div>
          <motion.div className="contactItem" variants={variants}>
            <h2>Location</h2>
            <span>Gauteng, South Africa</span>
          </motion.div>
        </motion.div>
        <div className="formContainer">
          <form>
            <input type="text" required placeholder="Name" />
            <input type="email" required placeholder="Email" />
            <textarea rows={8} placeholder="Message or notes" />
            <button>Submit</button>
          </form>
        </div>
      </motion.div>
      <motion.div
        className="footer"
        variants={footerVariant}
        initial="initial"
        whileInView="animate"
      >
        Please submit your details, I'll get back to you as soon as possible.
      </motion.div>
    </div>
  );
}

export default Contact;
