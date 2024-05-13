import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Меня зовут <em>Арсений,</em>
					</strong>
					<br />я студент TOP-academy
				</h1>
				<div className="header__text">
					<p>это мое портфолио.</p>
				</div>
				<a href="https:vk.com" target="_blank" className="btn">
					Связаться
				</a>
			</div>
		</header>
	);
}

export default Header;