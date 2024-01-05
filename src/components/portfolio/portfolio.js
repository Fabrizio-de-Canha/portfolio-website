import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const workItems = [
  {
    id: 1,
    name: "Tinder For Horses",
    link: "",
    image:
      "https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    discription: "Help your horse find his full potential",
  },
  {
    id: 2,
    name: "Calculator",
    link: "",
    image:
      "https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=600",
    discription: "",
  },
  {
    id: 3,
    name: "Web Scrapping Tool",
    link: "",
    image:
      "https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    discription: "",
  },
];

const GeneratedItem = ({ item }) => {
  return <section>
    <div className="container">
        <div className="wrapper">
            <div className="image">
                <img src={item.image}/>
            </div>
            <motion.div className="text">
                <h2>{item.name}</h2>
                <p>{item.discription}</p>
                <button>Try Out</button>
            </motion.div>
        </div>
    </div>
  </section>;
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="portfolioprogress">
        <h1>Portfolio</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>
      {workItems.map((item) => (
        <GeneratedItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
