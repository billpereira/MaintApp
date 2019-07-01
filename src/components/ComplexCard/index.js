import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';

const Title = styled.h3`
	font-weight: bold;
	display: block;
	padding: 5px;
	text-align: center;
	width: 150px;
	border: 1px solid #aaa;
	margin: 0;
	margin-top: 5px;
	${props => (props.dark ? `background-color: #ddd;` : `background-color: #222;`)}
	${props => (props.dark ? `border: 1px solid #aaa;;` : `border: 1px solid #000;`)}
`;

const List = styled.li`
	display: block;
	padding: 5px;
	${'' /* border: 1px solid #aaa; */}
	${props => (props.dark ? `border: 1px solid #aaa;;` : `border: 1px solid #000;`)}
	border-top: 0px solid transparent;
	text-align: center;
	width: 150px;
	margin: 0;
	${props =>
		props.level === 'ZOS230'
			? (props.dark?`background:#bbdefb;`:`background:#3f51b5;`)  
			: props.level === 'UPGRADE'
			? (props.dark?`background:#ffecb3;`:`background:#333`)
			: (props.dark?`background:#b2dfdb;`:`background:#03a9f4`)}
`;

const Group = styled.div`
	display: block;
	margin-right: 10px;
`;

export default function ComplexCard({ complex, lpars, dark }) {
	return (
		<Group>
			<CssBaseline />
			<Title dark={dark}>
				<b>
					<Typography variant="button">{complex}</Typography>
				</b>
			</Title>
			{lpars.map(lpar => (
				<Tooltip
					key={lpar.lparName}
					title={lpar.level}
					placement="left"
					enterDelay={500}
					leaveDelay={200}
				>
					<List level={lpar.level} dark={dark}>
						<Typography>{`${lpar.lparName}`}</Typography>
					</List>
				</Tooltip>
			))}
		</Group>
	);
}
