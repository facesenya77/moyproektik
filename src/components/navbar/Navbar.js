import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';

const ScrambleText = ({ text, scrambleTime }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let intervalId;

    const scramble = () => {
      return text.split('').map(() => {
        return String.fromCharCode(33 + Math.random() * (127 - 33));
      }).join('');
    };

    const startScrambling = () => {
      intervalId = setInterval(() => {
        setDisplayedText(scramble());
      }, 100); 
    };

    startScrambling();

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId); 
      setDisplayedText(text); 
    }, scrambleTime);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [text, scrambleTime]);

  return <motion.span>{displayedText}</motion.span>;
};

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	return (
		<nav className="nav">
		  <div className="container">
			<div className="nav-row">
			  <NavLink to="/" className="logo">
				<ScrambleText text="Фриланс портфолио" scrambleTime={1700} />
			  </NavLink>
	
			  <BtnDarkMode />

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								<strong>Главная</strong>
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/projects"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								<strong>Проекты</strong>
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/contacts"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								<strong>Контакты</strong>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
