import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import PatientHistory from './Assessment/PatientHistory';
import GeneralAssessment from './Assessment/GeneralAssessment';
import ComplaintBased from './Assessment/ComplaintBased';
import MechanismOfInjury from './Assessment/MechanismOfInjury';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	content: {
		padding: theme.spacing(3),
	},
	tabInactive: {
		display: 'none',
	}
}));

const Assessment = (props) => {
	const classes = useStyles();

	const { match, history } = props;
	const { params } = match;
	const { page } = params;

	const { setPatientHistory } = props;

	const { assessmentItems } = props;


	const tabNameToIndex = {
		0: "patient-history",
		1: "general-assessment",
		2: "complaint-based-assessment",
		3: "mechanism-of-injury",
	}

	const indexToTabName = {
		"patient-history": 0,
		"general-assessment": 1,
		"complaint-based-assessment": 2,
		"mechanism-of-injury": 3,
	}

	const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

	const handleChange = (event, newValue) => {
		history.push(`/assessment/${tabNameToIndex[newValue]}`)
		setSelectedTab(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs value={selectedTab} onChange={handleChange}>
					<Tab label="Patient History" />
					<Tab label="General Assessment" />
					<Tab label="Complaint based Assessment & History" />
					<Tab label="Mechanism of Injury" />

				</Tabs>
			</AppBar>
			<div>
				<Typography
					component="div"
					role="tabpanel"
					hidden={selectedTab !== indexToTabName[page]}
					id={`assessment-tabpanel-${page}`}
					aria-labelledby={`assessment-tab-${page}`}
				>
					{selectedTab === 0 && <PatientHistory state={props.patientHistory} setState={setPatientHistory} assessmentItems={assessmentItems} {...props} />}
					{selectedTab === 1 && <GeneralAssessment assessmentItems={assessmentItems} {...props}  />}
					{selectedTab === 2 && <ComplaintBased assessmentItems={assessmentItems} {...props}/>}
					{selectedTab === 3 && <MechanismOfInjury />}

				</Typography>
			</div>
			
		</div>
	)
}

export default Assessment
