import React from 'react';
import { Typography, Divider } from '@material-ui/core';

export default function index({ content }) {
	return (
		<>
			<Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
				{content.region}
			</Typography>
			<Divider />
			<Typography
				variant="button"
				display="block"
				gutterBottom
				style={{ fontWeight: 'bold' }}
			>
				Schedule
			</Typography>
			<Typography
				variant="body2"
				gutterBottom
				style={{ whiteSpace: 'pre-line' }}
			>
				{content.schedule}
			</Typography>
			<Divider />
			<Typography
				variant="button"
				display="block"
				gutterBottom
				style={{ fontWeight: 'bold' }}
			>
				{content.maintenance.zos230.level}
			</Typography>
			<Typography
				variant="body2"
				gutterBottom
				style={{ whiteSpace: 'pre-line' }}
			>
				Parmlib UPDATES: {content.maintenance.zos230.parmlibUpdates}
			</Typography>
			<Typography
				variant="body2"
				gutterBottom
				style={{ whiteSpace: 'pre-line' }}
			>
				Tech Updates: {content.maintenance.zos230.techsUpdates}
			</Typography>
			<Typography
				variant="body2"
				gutterBottom
				style={{ whiteSpace: 'pre-line' }}
			>
				CIRATS: {content.maintenance.zos230.CIRATS}
			</Typography>
			<Divider />
			<Typography
				variant="button"
				display="block"
				gutterBottom
				style={{ fontWeight: 'bold' }}
			>
				General
			</Typography>
			<Typography
				variant="body2"
				gutterBottom
				style={{ whiteSpace: 'pre-line' }}
			>
				Work in Progress: {content.workInProgress}
			</Typography>
			<Typography
				variant="body2"
				gutterBottom
				style={{ whiteSpace: 'pre-line' }}
			>
				Hardware changes: {content.hardwareChanges}
			</Typography>
			<Typography
				variant="body2"
				gutterBottom
				style={{ whiteSpace: 'pre-line' }}
			>
				Sysplex Changes: {content.sysplexChanges}
			</Typography>
			<Typography
				variant="body2"
				gutterBottom
				style={{ whiteSpace: 'pre-line' }}
			>
				Projects: {content.projects}
			</Typography>
			<Divider />
		</>
	);
}
