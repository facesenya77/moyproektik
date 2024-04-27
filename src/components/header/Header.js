import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Arseniy</em>
					</strong>
					<br />a student TOP-academy
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="https:vk.com" target="_blank" className="btn">
					Свзяаться
				</a>
			</div>
		</header>
	);
}

export default Header;