import React, { useState } from 'react'
import { InputLabel, AppBar, Box, Container, FormControl, Grid, MenuItem, Select, Tab, Tabs, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import General from './PatientHistory/General';
import Allergies from './PatientHistory/Allergies';
import Medications from './PatientHistory/Medications';
import LastMeal from './PatientHistory/LastMeal';
import EventsPrior from './PatientHistory/EventsPrior';
import PastHistory from './PatientHistory/PastHistory';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../features/patientHistory';

const useStyles = makeStyles((theme) => ({
	content: {
		padding: theme.spacing(3),
	},
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	tab: {
		minWidth: 75, // a number of your choice
	}
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
	const dispatch = useDispatch();
	const patientHistory = useSelector((state) => state.patientHistory.value)

	const { assessmentItems } = props;

	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (e, value) => {
		setSelectedTab(value);
	}

	const handleChange = (e) => {
		dispatch(store({
			...patientHistory,
			[e.target.name]: e.target.value,
		}))
	}

	const { bodySystems, setBodySystems, checkedDrug, setCheckedDrug, checkedEnv, setCheckedEnv, checkedMeds, setCheckedMeds, checkedHist, setCheckedHist } = assessmentItems;

	return (


		<div className={classes.root}>
			<Container maxWidth="xl" className={classes.content}>
				<Grid container spacing={3}>
					<Grid item container justifyContent="center">
						<Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
							<FormControl
								variant="filled"
								color="secondary"
								size="small"
								fullWidth
							>
								<InputLabel id="chief-complaint-label">Chief Complaint</InputLabel>
								<Select
									labelId="chief-complaint-label"
									name="Chief_Complaint"
									value={patientHistory.Chief_Complaint || ''}
									onChange={handleChange}
									label="Chief Complaint"
								>
									{chiefComplaints.map((item, index) => (
										<MenuItem key={index} value={item}>{item}</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<AppBar position="static">
				<Tabs value={selectedTab}
					onChange={handleTabChange}
					aria-label="patient history tabs"
					variant="scrollable"
					scrollButtons="auto"
				>
					<Tab className={classes.tab} label="General" {...a11yProps(0)} />
					<Tab className={classes.tab} label="Allergies" {...a11yProps(1)} />
					<Tab className={classes.tab} label="Medications" {...a11yProps(2)} />
					<Tab className={classes.tab} label="Last Meal" {...a11yProps(3)} />
					<Tab className={classes.tab} label="Events Prior" {...a11yProps(4)} />
					<Tab className={classes.tab} label="Past History" {...a11yProps(5)} />
				</Tabs>
			</AppBar>
			<div>
				<TabPanel value={selectedTab} index={0}>
					<General bodySystems={bodySystems} setBodySystems={setBodySystems}/>
				</TabPanel>
				<TabPanel value={selectedTab} index={1}>
					<Allergies 
						checkedDrug={checkedDrug} setCheckedDrug={setCheckedDrug}
						checkedEnv={checkedEnv} setCheckedEnv={setCheckedEnv}
					/>
				</TabPanel>
				<TabPanel value={selectedTab} index={2}>
					<Medications  checked={checkedMeds} setChecked={setCheckedMeds} />
				</TabPanel>
				<TabPanel value={selectedTab} index={3}>
					<LastMeal />
				</TabPanel>
				<TabPanel value={selectedTab} index={4}>
					<EventsPrior  />
				</TabPanel>
				<TabPanel value={selectedTab} index={5}>
					<PastHistory checked={checkedHist} setChecked={setCheckedHist} />
				</TabPanel>
			</div>
		</div>
	)
}



export default PatientHistory
