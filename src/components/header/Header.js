import React from 'react';
import { motion } from 'framer-motion';
import "./style.css";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  }),
}

const Header = () => {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      className="header">
      <div className="header__wrapper">
        <motion.h1 custom={1} variants={textAnimation} className="header__title">
          <strong>
            Меня зовут <em>Арсений,</em>
          </strong>
          <br />я студент TOP-academy
        </motion.h1>
        <motion.div custom={2} variants={textAnimation} className="header__text">
          <p>это мое портфолио.</p>
        </motion.div>
        <motion.a
     initial={{ scale: 1, background: "#5c62ec" }}
     whileHover={{ scale: 1.2, background: "rgba(144, 238, 144, 0.5)" }} 
     custom={3}
     variants={textAnimation}
     transition={{ duration: 0.2 }} 
     href="https://vk.com"
     target="_blank"
     className="btn">
     Связаться
   </motion.a>
   
      </div>
    </motion.header>
  );
}

export default Header;

