import React from 'react';
import clsx from 'clsx';

export default ({ openState, classes, children }) => {
	return (
		// <div className={classes.root}>
		<div>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: openState
				})}
			>
				<div className={classes.drawerHeader} />
				<div>{children}</div>
			</main>
		</div>
	);
};
