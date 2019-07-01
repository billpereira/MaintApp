import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ThemeSwitch from '../../ThemeSwitch';

export default ({ openState, setOpen, classes }) => {
	return (
		// <div className={classes.root}>
		<div> 
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: openState
				})}
			>
				<Toolbar>
					<IconButton
						edge="start"
						onClick={() => setOpen(!openState)}
						className={clsx(classes.menuButton, openState && classes.hide)}
						color="inherit"
						aria-label="Menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						AT&T MVS Hub
					</Typography>
					<ThemeSwitch className={classes.rightAlign}/>
				</Toolbar>
			</AppBar>
		</div>
	);
};
