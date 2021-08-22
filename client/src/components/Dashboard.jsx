import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon, MoreVert as MoreIcon, Save as SaveIcon } from '@material-ui/icons';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import HealingIcon from '@material-ui/icons/Healing';
import DescriptionIcon from '@material-ui/icons/Description';
import CallDetails from '../pages/CallDetails';
import axios from 'axios';
import OperatorInfo from '../pages/OperatorInfo';
import Assessment from '../pages/Assessment';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		// padding: theme.spacing(3),
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	title: {
		flexGrow: 1,
	},
	link: {
		color: 'inherit',
		textDecoration: 'none',
	}
}));
const Dashboard = (props) => {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	const [callTransaction, setCallTransaction] = useState({
		Call_ID: '12345',
		MIN: '234545',
		Driver_ID: '',
		Attendant_ID: '',
		Assisting_ID: '',
		Vehicle_ID: '',
		Vehicle_Status: '',
	})

	const [vehicleDetails, setVehicleDetails] = useState({
		Call_ID: '12345',
		noPatientsTransported: 0,
		vhTimeNotified: '',
		vhTimeEnRoute: '',
		vhTimeAtScene: '',
		vhTimeCrewPatient: '',
		vhTimeLeftScene: '',
		vhTimeAtDestination: '',
		vhTimeAvailable: '',
		vhTimeBackArea: '',
		vhResponseToScene: '',
		vhResponseToSceneChg: '',
		vhResponseFromScene: '',
		vhResponseFromSceneChg: '',
		crwDriv: '',
		crwAtte: '',
		crwAsst: '',
		crwDrOth: '',
		crwAttnOth: '',
		crwAsstOth: '',
		vhOut: '',
		vhAtScn: '',
		vhAtDestn: '',
		vhIn: '',
		vhTotal: '',
	})

	const [patientDetails, setPatientDetails] = useState({
		Call_ID: '12345',
		Surname: '',
		Given_Name: '',
		Street: '',
		Community: '',
		Province: '',
		Country: '',
		PostalCode: '',
		Tel_No: '',
		DOB: '',
		Age: '',
		Race: '',
		Gender: '',
		Medicare_No: '',
		Medicare_Origin: '',
		Hospital_Chart_No: '',
		P_Comments: '',
	})

	const [incidentDetails, setIncidentDetails] = useState({
		Call_ID: '12345',
		Service_Code: '',
		Service_Type: '',
		Dispatch_Code: '',
		Date_of_Incident: '',
		Inc_Street: '',
		Inc_Community: '',
		Inc_Province: '',
		Inc_PostalCode: '',
		Dest_Determinant: '',
		DD_Other: '',
		Geo_Locator: '',
		Inc_Loc_Type: '',
		Dest_Facility_Code: '',
		Dest_Street: '',
		Dest_Community: '',
		Dest_Province: '',
		Dest_PostalCode: '',
		Dest_Facility: '',
		Scene_Facility_Code: '',
		Fact_Affect_EMS: '',
		Fact_Other: '',
		Patient_Contact: '',
		Patient_Disposition: '',
		Pt_Disp_Other: '',
		Service_Patient_Respons: '',
		Service_Payment_Number: '',
	});

	const [patientHistory, setPatientHistory] = useState({
		Call_ID: '12345',
		Chief_Complaint: '',
		G_BodySystem: '',
		G_Inj_Date: '',
		G_Inj_Time: '',
		G_Co_Responders: '',
		G_Treat_Rendered: '',
		G_Pt_Condi_Dest: '',
		G_Pt_Disp: '',
		G_Susp_Intoxi: '',
		G_DNR_Order: false,
		Alr_Drugs: '',
		Alr_Env: '',
		Alr_Others: '',
		Med_Name: '',
		Med_Others: '',
		LM_Comment: '',
		EP_Comment: '',
		PH_History: '',
		PH_Comment: '',
	})

	const [neuroResponse, setNeuroResponse] = useState({
		Call_ID: '12345',
		LOC: '',
		Status: '',
		R_Eye_Size: '',
		L_Eye_Size: '',
		R_Eye_React: '',
		L_Eye_React: '',
		Sense_UR: '',
		Sense_UL: '',
		Sense_LR: '',
		Sense_LL: '',
		Motor_UR: '',
		Motor_UL: '',
		Motor_LR: '',
		Motor_LL: '',
	})

	const [abcs, setABCs] = useState({
		Call_ID: '12345',
		Airway_Status: '',
		Breath_Effort: '',
		Breath_Rate: '',
		Breath_Rhythm: '',
		Circul_Site: '',
		Circul_Rate: '',
		Circul_Vol: '',
		Circul_Rhythm: '',
	})

	const [assessFindings, setAssessFindings] = useState({
		Call_ID: '12345',
		Assess_Find: '',
		Body_Area_Find: '',
		Find_Other: '',
	})

	const [respiratory, setRespiratory] = useState({
		Call_ID: '12345',
		Level_of_distress: '',
		Breath_sound_I: '',
		Breath_sound_II: '',
		PreEMS_Medication: '',
		Response_to_Medic: '',
		Pain_Scale: '',
		Coughing: '',
		Tobacco: '',
		Allerg_Exposure: '',
		Medication_Admin: '',
		JVD: '',
		Periph_Edema: '',
		Acc_Mus_Use: '',
	})

	const [bodySystems, setBodySystems] = useState([
		{
			label: 'Cardiovascular',
			value: 'cardiovascular',
			checked: false,
		},
		{
			label: 'Central Nervous System',
			value: 'centralNervousSystem',
			checked: false,
		},
		{
			label: 'Endocrine',
			value: 'endocrine',
			checked: false,
		},
		{
			label: 'GI',
			value: 'GI',
			checked: false,
		},
		{
			label: 'Integumentary',
			value: 'integumentary',
			checked: false,
		},
		{
			label: 'Musculoskeletal',
			value: 'musculoskeletal',
			checked: false,
		},
		{
			label: 'Renal',
			value: 'renal',
			checked: false,
		},
		{
			label: 'Reproductive',
			value: 'reproductive',
			checked: false,
		},
		{
			label: 'Respiratory',
			value: 'respiratory',
			checked: false,
		},
	]);

	const [status, setStatus] = useState([
		{
			label: 'Normal',
			value: 'normal',
			checked: false,
		},
		{
			label: 'Combative',
			value: 'combative',
			checked: false,
		},
		{
			label: 'Confused',
			value: 'confused',
			checked: false,
		},
		{
			label: 'Dysphasia',
			value: 'dysphasia',
			checked: false,
		},
		{
			label: 'Hallucinations',
			value: 'hallucinations',
			checked: false,
		},
		{
			label: 'Lethargic',
			value: 'lethargic',
			checked: false,
		},
		{
			label: 'Seizures',
			value: 'seizures',
			checked: false,
		},
		{
			label: 'Tremors',
			value: 'tremors',
			checked: false,
		},
		{
			label: 'Other',
			value: 'other',
			checked: false,
		},
	]);

	const [breathSoundChecksII, setBreathSoundChecksII] = useState([
		{
			label: 'Wheezes',
			value: 'Wheezes',
			checked: false,
		},
		{
			label: 'Crackles',
			value: 'Crackles',
			checked: false,
		},
		{
			label: 'Other',
			value: 'Other',
			checked: false,
		},
		{
			label: 'Right Apex',
			value: 'Right Apex',
			checked: false,
		},
		{
			label: 'Left Apex',
			value: 'Left Apex',
			checked: false,
		},
		{
			label: 'Right Base',
			value: 'Right Base',
			checked: false,
		},
		{
			label: 'Left Base',
			value: 'Left Base',
			checked: false,
		},
	]);

	// Allergies
	const [checkedDrug, setCheckedDrug] = useState([]);
	const [checkedEnv, setCheckedEnv] = useState([]);

	// Medications
	const [checkedMeds, setCheckedMeds] = useState([]);

	// Past History
	const [checkedHist, setCheckedHist] = useState([]);

	// Assessment Findings
	const [assessChecked, setAssessChecked] = useState([])
	const [bodyChecked, setBodyChecked] = useState([])

	const assessmentItems = {
		bodySystems: bodySystems,
		setBodySystems: setBodySystems,
		checkedDrug: checkedDrug,
		setCheckedDrug: setCheckedDrug,
		checkedEnv: checkedEnv,
		setCheckedEnv: setCheckedEnv,
		checkedMeds: checkedMeds,
		setCheckedMeds: setCheckedMeds,
		checkedHist: checkedHist,
		setCheckedHist: setCheckedHist,
		neuroResponse: neuroResponse,
		setNeuroResponse: setNeuroResponse,
		status: status,
		setStatus: setStatus,
		abcs: abcs,
		setABCs: setABCs,
		assessFindings: assessFindings,
		setAssessFindings: setAssessFindings,
		assessChecked: assessChecked,
		setAssessChecked: setAssessChecked,
		bodyChecked: bodyChecked,
		setBodyChecked: setBodyChecked,
		respiratory: respiratory,
		setRespiratory: setRespiratory,
		breathSoundChecksII: breathSoundChecksII,
		setBreathSoundChecksII: setBreathSoundChecksII,
	}

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleSave = (e) => {
		e.preventDefault();

		const EMSDATA = {
			"Call_Transaction": callTransaction,
			"Patient_Details": patientDetails,
			"Vehicle_Details": vehicleDetails,
			"Incident_Details": incidentDetails,
			"Patient_History": patientHistory,
			"Neuro_Response": neuroResponse,
			"ABCs": abcs,
			"Assess_Findings": assessFindings,
			"Respiratory": respiratory,
		}

		axios
			.post('http://localhost:9000/testAPI/create', JSON.stringify(EMSDATA))
			.then(() => console.log('EMS Data Saved'))
			.catch(err => {
				console.error(err);
			});
		alert("Data Saved!")
	}

	const drawer = (

		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				<Link to="/call-details" className={classes.link}>
					<ListItem button onClick={handleDrawerClose}>
						<ListItemIcon><CallIcon color="secondary" /></ListItemIcon>
						<ListItemText primary={"Call Details"} />
					</ListItem>
				</Link>
				<Link to="/assessment" className={classes.link}>
					<ListItem button onClick={handleDrawerClose}>
						<ListItemIcon><AssessmentIcon color="secondary" /></ListItemIcon>
						<ListItemText primary={"Assessment"} />
					</ListItem>
				</Link>
				<Link to="/vital-signs" className={classes.link}>
					<ListItem button onClick={handleDrawerClose}>
						<ListItemIcon><ShowChartIcon color="secondary" /></ListItemIcon>
						<ListItemText primary={"Vital Signs"} />
					</ListItem>
				</Link>
				<Link to="/treatment" className={classes.link}>
					<ListItem button onClick={handleDrawerClose}>
						<ListItemIcon><HealingIcon color="secondary" /></ListItemIcon>
						<ListItemText primary={"Treatment"} />
					</ListItem>
				</Link>
				<Link to="/call-report" className={classes.link}>
					<ListItem button onClick={handleDrawerClose}>
						<ListItemIcon><DescriptionIcon color="secondary" /></ListItemIcon>
						<ListItemText primary={"Call Report"} />
					</ListItem>
				</Link>
			</List>
		</div >
	);

	const container = window !== undefined ? () => window().document.body : undefined;
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar} color="primary">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap className={classes.title}>
						Dotty Care
					</Typography>
					<IconButton aria-label="save data in fields" edge="end" color="inherit" onClick={handleSave}>
						<SaveIcon />
					</IconButton>
					{/* <IconButton aria-label="display more actions" edge="end" color="inherit">
						<MoreIcon />
					</IconButton> */}
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<SwipeableDrawer
						disableBackdropTransition={!iOS} disableDiscovery={iOS}
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={open}
						onClose={handleDrawerToggle}
						onOpen={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</SwipeableDrawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<div className={classes.content}>
				<div className={classes.drawerHeader} />

				<Switch>
					<Redirect exact from="/" to="/operator-info" />
					<Redirect exact from="/call-details" to="/call-details/vehicle-details" />
					<Redirect exact from="/assessment" to="/assessment/patient-history" />

					<Route path="/operator-info">
						<OperatorInfo state={callTransaction} setState={setCallTransaction} />
					</Route>

					<Route exact path="/call-details/:page?"
						render={props =>
							<CallDetails
								vehicleDetails={vehicleDetails}
								setVehicleDetails={setVehicleDetails}
								patientDetails={patientDetails}
								setPatientDetails={setPatientDetails}
								incidentDetails={incidentDetails}
								setIncidentDetails={setIncidentDetails}
								{...props}
							/>
						}
					/>

					<Route exact path="/assessment/:page?"
						render={props =>
							<Assessment
								patientHistory={patientHistory}
								setPatientHistory={setPatientHistory}
								assessmentItems={assessmentItems}
								{...props}
							/>
						}
					/>

					<Route path="/vital-signs">
						{/* <AboutUs /> */}
					</Route>
					<Route path="/treatment">
						{/* <ContactUs /> */}
					</Route>
					<Route path="/call-report">
						{/* <Hospital /> */}
					</Route>
				</Switch>
				{/* {JSON.stringify(vehicleDetails)} */}

			</div>
		</div>
	)
}

export default Dashboard
