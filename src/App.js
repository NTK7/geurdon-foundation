import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DrawableTab from './shared/DrawableTab/DrawableTab';
import Footer from './shared/Footer';
import Header from './shared/Header';

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<DrawableTab />
				<Switch>
					<Route path="/home">
						<HomePage />
					</Route>
					<Route path="/">
						<Redirect to="/home" />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
