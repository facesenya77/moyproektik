import {motion} from 'framer-motion';
import Header from './../components/header/Header'

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

const Home = () => {
    return (
		<>
			<Header />
			<motion.main
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2 }}
			className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<motion.h2 custom={1} variants={textAnimation} className="title-2">Фронтенд</motion.h2>
							<motion.p custom={2} variants={textAnimation}>
								JavaScript, TypeScript, ReactJS,
								HTML, CSS, NPM, BootStrap
							</motion.p>
						</li>
						<li className="content-list__item">
							<motion.h2 custom={3} variants={textAnimation} className="title-2">Бэкэнд</motion.h2>
							<motion.p custom={4} variants={textAnimation}>NodeJS, MySQL</motion.p>
						</li>
					</ul>
				</div>
			</motion.main>
		</>
	);
}

export default Home;