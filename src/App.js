import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Material UI Imports
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';

// Custom files and components
import ThemeContext from './components/ThemeSwitch/themeContext';
import Layout from './components/Layout';

import Maintenance from './components/Maintenance';
import Agenda from './components/Agenda';
import Incidents from './components/Incidents';
import Home from './components/Home';

const App = () => {
	const [darkState, setDarkState] = useState(true);

	const theme = createMuiTheme({
		palette: {
			type: darkState ? 'light' : 'dark'
		}
	});

	return (
		<BrowserRouter>
			<ThemeContext.Provider value={{ darkState, setDarkState }}>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<Layout>
						<Switch>
							<Route path="/" component={Home} exact />
							<Route path="/maintenance" component={Maintenance} />
							<Route path="/agenda" component={Agenda} />
							<Route path="/incidents" component={Incidents} />
						</Switch>
					</Layout>
				</MuiThemeProvider>
			</ThemeContext.Provider>
		</BrowserRouter>
	);
};

export default App;
