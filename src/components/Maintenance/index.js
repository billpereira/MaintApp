import React from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import VolumeMapping from '../VolumeMapping';
import MaintenanceLevels from '../MaintenanceLevels';

const MaintenancePages = [
	{
		title: 'Volume Mapping',
		page: <VolumeMapping />
	},
	{
		title: 'Maintenance Levels',
		page: <MaintenanceLevels />
	}
];

export default () => {
	return (
			<Container pages={MaintenancePages} />
	);
};
