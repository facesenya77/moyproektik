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
          whileHover={{ scale: 1.2 }}
          custom={3}
          variants={textAnimation}
          href="https:vk.com"
          target="_blank"
          className="btn">
          Связаться
        </motion.a>
      </div>
    </motion.header>
  );
}

export default Header;
