import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, img, imgURL, index }) => {
	return (
		<NavLink to={`/project/${index}`}>
			<li className="project">
				{/* <div style={{ background: `url(${imgURL})` }} class="project__img-a">
				</div> */}
				<img src={img} alt={title} className="project__img" />
				<h3 className="project__title">{title}</h3>
			</li>
		</NavLink>
	);
};

export default Project;
