import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "./../helpers/projectsList"
import {motion} from 'framer-motion';

const textAnimation = {
	hidden: {
	  y: 100,
	  opacity: 0,
	},
	visible: custom => ({
	  y: 0,
	  opacity: 1,
	  transition: { delay: custom * 0.2 }
	}),
  }

const Project = () => {
	const {id} = useParams();
	const project = projects[id];

    return (
		<motion.main 
		initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2 }}
			className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>

					<motion.img custom={1} variants={textAnimation}
						src={project.imgBig}
						alt={project.title}
						className="project-details__cover"
					/>
					<motion.div custom={2} variants={textAnimation} className="project-details__desc">
						<p>Коротко о проекте:</p>
					</motion.div>
					<div className="symbols">
					<motion.div custom={3} variants={textAnimation} className="project-details__desc1">
						<p>✔️Проект написан на: {project.skills}</p>
						</motion.div>

					<motion.div custom={4} variants={textAnimation} className="project-details__desc1">
						<p>🕓Проект был разработан за неделю командой из трех разработчиков </p>
						</motion.div>

					<motion.div custom={5} variants={textAnimation} className="project-details__desc1">
						<p>⚡Имеет дружественный интерфейс и документацию для легкого использования и понимания </p>
						</motion.div>

					<motion.div custom={6} variants={textAnimation} className="project-details__desc1">
						<p>🚀Проект успешно запущен и используется в боевых условиях </p>
						</motion.div>
						</div>
					{project.gitHubLink && (
						<BtnGitHub link="https://github.com/shsv382" />
					)}
				</div>
			</div>
			
		</motion.main>
	);
}

export default Project;