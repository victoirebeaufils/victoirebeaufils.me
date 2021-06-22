import React from 'react';
import Header from '../header';
import Footer from '../footer';
import 'bootstrap/dist/css/bootstrap.css';
import Popper from 'popper.js';
import './layout.css';
import './default.css'
import { motion } from "framer-motion"

const content = {
    animate: {
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const header = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  



function Layout (props){


    return (
        
      <motion.div
      initial="initial"
      animate="animate"
      variants={content}
      className="space-y-12"
      exit={{ opacity: 0 }}
    >
            <motion.section variants={header}>
            <Header />
            </motion.section>
            <motion.section variants={header}className="container">
            {props.children}
            </motion.section>
            <motion.section variants={header}>
            <Footer/>
            </motion.section>
            </motion.div>
       
    )
}
export default Layout;