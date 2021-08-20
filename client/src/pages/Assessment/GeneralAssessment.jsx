import React, { useState } from 'react'
import { AppBar, Box, Grid, Tab, Tabs, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import NeuroResponse from '../Assessment/GeneralAssessment/NeuroResponse'
import ABCs from '../Assessment/GeneralAssessment/ABCs'
import AssessmentFindings from '../Assessment/GeneralAssessment/AssessmentFindings'

const useStyles = makeStyles((theme) => ({
	content: {
		paddingTop: theme.spacing(3),
	},
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`general-assessment-tabpanel-${index}`}
			aria-labelledby={`general-assessment-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography component="div">{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `general-assessment-tab-${index}`,
		'aria-controls': `general-assessment-tabpanel-${index}`,
	};
}

const GeneralAssessment = (props) => {
	const classes = useStyles();

	const { assessmentItems } = props;

	const { neuroResponse, setNeuroResponse, status, setStatus, abcs, setABCs } = assessmentItems;

	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (e, value) => {
		setSelectedTab(value);
	}


	return (
		<div className={classes.content}>
			<AppBar position="static">
				<Tabs value={selectedTab} onChange={handleTabChange} aria-label="general assessment tabs">
					<Tab label="Neuro Response" {...a11yProps(0)} />
					<Tab label="A B C's" {...a11yProps(1)} />
					<Tab label="Assessment Findings" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={selectedTab} index={0}>
				<NeuroResponse state={neuroResponse} setState={setNeuroResponse} status={status} setStatus={setStatus} />
			</TabPanel>
			<TabPanel value={selectedTab} index={1}>
				<ABCs state={abcs} setState={setABCs} />
			</TabPanel>
			<TabPanel value={selectedTab} index={2}>
				<AssessmentFindings />
			</TabPanel>
		</div>
	)
}

export default GeneralAssessment
