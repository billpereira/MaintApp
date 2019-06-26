import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

import themeContext from './themeContext';

const ThemeSwitch = () => {
	const { darkState, setDarkState } = useContext(themeContext);

	const handleDarkState = event => {
		setDarkState(event.target.checked);
	};

	return (
		// <FormGroup row>
		// 	<FormControlLabel
		// 		control={
					<Switch
						checked={darkState}
						onChange={handleDarkState}
						value={darkState}
            color={"default"}
					/>
		// 		}
		// 		label="Dark "
		// 	/>
		// </FormGroup>
	);
};

export default ThemeSwitch;
