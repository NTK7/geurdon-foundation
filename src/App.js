import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DrawableTab from './shared/DrawableTab/DrawableTab';
import Footer from './shared/Footer';
import Header from './shared/Header';

const App = () => {
	useEffect(() => {
		caches.keys().then((names) => {
			names.forEach((name) => {
				caches.delete(name);
			});
		});
	}, []);

	return (
		<Router>
			<div>
				<Header />
				<DrawableTab />
				<Switch>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
