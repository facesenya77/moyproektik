import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Фронтенд</h2>
							<p>
								JavaScript, TypeScript, ReactJS,
								HTML, CSS, NPM, BootStrap
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Бэкэнд</h2>
							<p>NodeJS, MySQL</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;