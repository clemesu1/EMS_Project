import React, { useState } from 'react'
import { AppBar, Box, FormControl, Grid, MenuItem, Select, Tab, Tabs, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import General from './PatientHistory/General';
import Allergies from './PatientHistory/Allergies';
import Medications from './PatientHistory/Medications';
import LastMeal from './PatientHistory/LastMeal';
import EventsPrior from './PatientHistory/EventsPrior';
import PastHistory from './PatientHistory/PastHistory';

const useStyles = makeStyles((theme) => ({
	content: {
		padding: theme.spacing(3),
	},
}));


const chiefComplaints = ["Abdominal Pain/Problems", "Allergies/Envenomations", "Animal Bites/Attacks", "Assault/Sexual Assault", "Back Pain (Non Traumatic)", "Breathing Problems", "Burns(Scalds)/Explosions", "Carbon Monoxide/Inhal/HAZMAT", "Cardiac or Resp Arrest/Death", "Chest Pain", "Choking", "Convulsions/Seizures", "Diabetic Problems", "Drowning/Diving/Scuba Accident", "Electrocution/Lightning", "Eye Problems/Injuries", "Falls", "Headache", "Heart Problems/A.I.C.D.", "Heat/Cold Exposure", "Hemorrhage/Lacerations", "Industrial/Machinery Accidents", "Overdose/Poisoning(Ingestion)", "Pregnancy/Childbirth/Miscarria", "Psych/Abnorml Behavior/Suicide", "Sick Person (Spec diagnosis)", "Stab/Gunshot/Penetrating Traum", "Stroke (CVA)", "Traffic/Transportation Acc", "Traumatic Injuries (Specific)", "Unconscious/Fainting (Near)", "Unknown Problem (Man Down)", "Interfacility", "Weakness"];

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`patient-history-tabpanel-${index}`}
			aria-labelledby={`patient-history-tab-${index}`}
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
		id: `patient-history-tab-${index}`,
		'aria-controls': `patient-history-tabpanel-${index}`,
	};
}

const PatientHistory = (props) => {
	const classes = useStyles();

	const { state, setState } = props;
	const { assessmentItems } = props;

	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (e, value) => {
		setSelectedTab(value);
	}

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	const { bodySystems, setBodySystems, checkedDrug, setCheckedDrug, checkedEnv, setCheckedEnv, checkedMeds, setCheckedMeds, checkedHist, setCheckedHist } = assessmentItems;

	return (
		<div>
			<Grid container spacing={3} className={classes.content}>
				<Grid item container spacing={2} justifyContent="center" alignItems="center">
					<Grid item>
						<Typography variant="subtitle1" component="div">
							<Box fontWeight="fontWeightMedium">
								Chief Complaint
							</Box>
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<FormControl
							variant="outlined"
							color="secondary"
							size="small"
							fullWidth
						>
							<Select
								name="Chief_Complaint"
								value={state.Chief_Complaint || ''}
								onChange={handleChange}
							>
								{chiefComplaints.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item container xs={12}>
					<AppBar position="static">
						<Tabs value={selectedTab} onChange={handleTabChange} aria-label="patient history tabs" scrollButtons="auto" variant="scrollable">
							<Tab label="General" {...a11yProps(0)} />
							<Tab label="Allergies" {...a11yProps(1)} />
							<Tab label="Medications" {...a11yProps(2)} />
							<Tab label="Last Meal" {...a11yProps(3)} />
							<Tab label="Events Prior" {...a11yProps(4)} />
							<Tab label="Past History" {...a11yProps(5)} />
						</Tabs>
					</AppBar>
					<Grid item xs={12}>
						<TabPanel value={selectedTab} index={0}>
							<General state={state} setState={setState} bodySystems={bodySystems} setBodySystems={setBodySystems} />
						</TabPanel>
						<TabPanel value={selectedTab} index={1}>
							<Allergies state={state} setState={setState}
								checkedDrug={checkedDrug} setCheckedDrug={setCheckedDrug}
								checkedEnv={checkedEnv} setCheckedEnv={setCheckedEnv}
							/>
						</TabPanel>
						<TabPanel value={selectedTab} index={2}>
							<Medications state={state} setState={setState} checked={checkedMeds} setChecked={setCheckedMeds} />
						</TabPanel>
						<TabPanel value={selectedTab} index={3}>
							<LastMeal state={state} setState={setState} />
						</TabPanel>
						<TabPanel value={selectedTab} index={4}>
							<EventsPrior state={state} setState={setState} />
						</TabPanel>
						<TabPanel value={selectedTab} index={5}>
							<PastHistory state={state} setState={setState} checked={checkedHist} setChecked={setCheckedHist} />
						</TabPanel>
					</Grid>

				</Grid>
			</Grid>



		</div>
	)
}



export default PatientHistory
