import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import VehicleDetails from '../pages/CallDetails/VehicleDetails'
import PatientDetails from '../pages/CallDetails/PatientDetails'
import IncidentDetails from '../pages/CallDetails/IncidentDetails'

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

const CallDetails = (props) => {
	const { match, history } = props;
	const { params } = match;
	const { page } = params;

	const { setVehicleDetails, setPatientDetails, setIncidentDetails } = props;

	const tabNameToIndex = {
		0: "vehicle-details",
		1: "patient-details",
		2: "incident-details",
	}

	const indexToTabName = {
		"vehicle-details": 0,
		"patient-details": 1,
		"incident-details": 2,
	}

	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

	const handleChange = (event, newValue) => {
		history.push(`/call-details/${tabNameToIndex[newValue]}`)
		setSelectedTab(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs value={selectedTab} onChange={handleChange}>
					<Tab label="Vehicle Details" />
					<Tab label="Patient Details" />
					<Tab label="Incident Details" />
				</Tabs>
			</AppBar>
			<div className={classes.content}>
				<Typography
					component="div"
					role="tabpanel"
					hidden={selectedTab !== indexToTabName[page]}
					id={`simple-tabpanel-${page}`}
					aria-labelledby={`simple-tab-${page}`}
				>
					{selectedTab === 0 && <VehicleDetails state={props.vehicleDetails} setState={setVehicleDetails} />}
					{selectedTab === 1 && <PatientDetails state={props.patientDetails} setState={setPatientDetails} />}
					{selectedTab === 2 && <IncidentDetails state={props.incidentDetails} setState={setIncidentDetails}  patientDetails={props.patientDetails} />}
				</Typography>
			</div>
		</div>
	)
}

export default CallDetails;
