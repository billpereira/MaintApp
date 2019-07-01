import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styled from 'styled-components';

import ComplexCard from '../../ComplexCard';
import volumeMap from '../../../data/volumeMap';
import themeContext from '../../ThemeSwitch/themeContext'

const ComplexesContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
`;

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%'
		// paddi
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	}
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();
  
  const { darkState, } = useContext(themeContext);

	const tier0 = volumeMap.filter(complex => complex.group === 0);
	const tier1 = volumeMap.filter(complex => complex.group === 1);
	const tier2 = volumeMap.filter(complex => complex.group === 2);
	const prod = volumeMap.filter(complex => complex.group === 3);

	return (
		<>
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="tier0"
					id="tier0"
				>
					<Typography className={classes.heading}>Tier 0</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails style={{ display: 'flex' }}>
					<ComplexesContainer>
						{tier0.map(complex => (
							<ComplexCard
								key={complex.complex}
								complex={complex.complex}
								lpars={complex.lpars}
                dark={darkState}
							/>
						))}
					</ComplexesContainer>
				</ExpansionPanelDetails>
			</ExpansionPanel>

			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="tier1"
					id="tier1"
				>
					<Typography className={classes.heading}>Tier 1</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails style={{ display: 'flex' }}>
					<ComplexesContainer>
						{tier1.map(complex => (
							<ComplexCard
								key={complex.complex}
								complex={complex.complex}
								lpars={complex.lpars}
                dark={darkState}
							/>
						))}
					</ComplexesContainer>
				</ExpansionPanelDetails>
			</ExpansionPanel>

			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="tier2"
					id="tier2"
				>
					<Typography className={classes.heading}>Tier 2</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails style={{ display: 'flex' }}>
					<ComplexesContainer>
						{tier2.map(complex => (
							<ComplexCard
								key={complex.complex}
								complex={complex.complex}
								lpars={complex.lpars}
                dark={darkState}
							/>
						))}
					</ComplexesContainer>
				</ExpansionPanelDetails>
			</ExpansionPanel>

			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="prod"
					id="prod"
				>
					<Typography className={classes.heading}>Prod</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails style={{ display: 'flex' }}>
					<ComplexesContainer>
						{prod.map(complex => (
							<ComplexCard
								key={complex.complex}
								complex={complex.complex}
								lpars={complex.lpars}
                dark={darkState}
							/>
						))}
					</ComplexesContainer>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</>
	);
}
