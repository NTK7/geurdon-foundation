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
