import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import MainArea from '../MainArea';
import { NavLink } from 'react-router-dom';

import menuOptions from './MenuOptions'

const AdapterLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

export default function PersistentDrawerLeft({
	openState,
	setOpen,
	classes,
	children
}) {
	const theme = useTheme();

	return (
		<div className={classes.root}>
		{/* <div> */}
		
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={openState}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={() => setOpen(!openState)}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					{menuOptions.map((item, index) => (
							<ListItem button key={index} component={AdapterLink} to={item.link}>
								<Icon>{item.icon}</Icon>
								<ListItemText style={{paddingLeft:'10px'}} primary={`${item.title}`} />
							</ListItem>
						))}
				</List>
				<Divider />
				
			</Drawer>
			<MainArea openState={openState} classes={classes}>
				{children}
			</MainArea>
		</div>
	);
}
