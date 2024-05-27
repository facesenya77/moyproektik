import Project from '../components/project/Project'; 
import { projects } from "./../helpers/projectsList"; 
import { motion, Variants } from "framer-motion"; 
 
const Projects = () => { 
  const containerVariants: Variants = { 
    hidden: {}, 
    visible: { 
      transition: { 
        staggerChildren: 0.5 
      } 
    } 
  }; 
 
  const itemVariants: Variants = { 
    hidden: { 
      opacity: 0, 
      y: 20 
    }, 
    visible: { 
      opacity: 1, 
      y: 0 
    } 
  }; 
 
  const transition = { 
    duration: 0.3  
  }; 
 
  return ( 
    <motion.main className="section" initial="hidden" animate="visible" variants={containerVariants}> 
      <div className="container"> 
        <motion.h2 className="title-1" variants={itemVariants} transition={transition}>Проекты</motion.h2> 
        <ul className="projects"> 
          {projects.map((project, index) => ( 
            <motion.li key={index} variants={itemVariants} transition={transition} whileHover={{ scale: 1.1 }}> 
              <Project 
                title={project.title} 
                img={project.img} 
                imgURL={project.imgURL} 
                index={index} 
              /> 
            </motion.li> 
          ))} 
        </ul> 
      </div> 
    </motion.main> 
  ); 
}; 
 
export default Projects;


