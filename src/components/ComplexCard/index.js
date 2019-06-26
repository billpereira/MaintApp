import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';

const Title = styled.h3`
	font-weight: bold;
	background: #ddd;
	display: block;
	padding: 5px;
	text-align: center;
	width: 150px;
	border: 1px solid #aaa;
	margin: 0;
`;

const List = styled.li`
	display: block;
	padding: 5px;
	border: 1px solid #aaa;
	border-top: 0px solid transparent;
	text-align: center;
	width: 150px;
	margin: 0;
	${props =>
		props.level === 'ZOS230' ? `background:#bbdefb;` : (props.level==='UPGRADE'?`background:#ffecb3;`:`background:#b2dfdb;`)}
`;

const Group = styled.div`
	margin-right: 10px;
`;

export default function ComplexCard({ complex, lpars }) {
	return (
		<Group>
			<CssBaseline />
				<Title>
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
						<List level={lpar.level}>
							<Typography>
                {`${lpar.lparName}`}
              </Typography>
						</List>
					</Tooltip>
				))}
		</Group>
	);
}
