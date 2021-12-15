import React, { useState } from 'react'
import { makeStyles, useTheme, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Divider, Drawer, Fab, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Snackbar, SwipeableDrawer, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { Menu as MenuIcon, Save as SaveIcon, MoreVert as MoreIcon, Close as CloseIcon } from '@material-ui/icons';
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
import VitalSigns from '../pages/VitalSigns';
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

import { useSelector } from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
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
	fab: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	snackbar: {
		[theme.breakpoints.down('xs')]: {
			bottom: 90,
		},
	},
	title: {
		flexGrow: 1,
	},
	link: {
		color: 'inherit',
		textDecoration: 'none',
	}
}));

const ColorModeContext = React.createContext({ toggleColorMode: () => { } })

const DashboardContent = (props) => {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	const colorMode = React.useContext(ColorModeContext)

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

	// Toxic Exposure
	const [substanceAmount, setSubstanceAmount] = useState('')
	const [substanceUnit, setSubstanceUnit] = useState('')

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
		status: status,
		setStatus: setStatus,

		assessChecked: assessChecked,
		setAssessChecked: setAssessChecked,
		bodyChecked: bodyChecked,
		setBodyChecked: setBodyChecked,
	
		breathSoundChecksII: breathSoundChecksII,
		setBreathSoundChecksII: setBreathSoundChecksII,
		
		substanceAmount: substanceAmount,
		setSubstanceAmount: setSubstanceAmount,
		substanceUnit: substanceUnit,
		setSubstanceUnit: setSubstanceUnit,
	
	}

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const [snackOpen, setSnackOpen] = React.useState(false);

	const handleSnackClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setSnackOpen(false);
	};

	const [anchorEl, setAnchorEl] = React.useState(null)
	const openMenu = Boolean(anchorEl);
	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
	}
	const callTransaction = useSelector((state) => state.callTransaction.value)
	const incidentDetails = useSelector((state) => state.incidentDetails.value)
	const patientDetails = useSelector((state) => state.patientDetails.value)
	const vehicleDetails = useSelector((state) => state.vehicleDetails.value)
	const patientHistory = useSelector((state) => state.patientHistory.value)
	const neuroResponse = useSelector((state) => state.neuroResponse.value)
	const abcs = useSelector((state) => state.abcs.value)
	const assessFindings = useSelector((state) => state.assessFindings.value)
	const respiratory = useSelector((state) => state.respiratory.value)
	const seizure = useSelector((state) => state.seizure.value)
	const toxicExposure = useSelector((state) => state.toxicExposure.value)
	const cardiacArrest = useSelector((state) => state.cardiacArrest.value)
	const chestPain = useSelector((state) => state.chestPain.value)
	const neonatalAssessment = useSelector((state) => state.neonatalAssessment.value)
	const obstetric = useSelector((state) => state.obstetric.value)
	const mechanismInjury = useSelector((state) => state.mechanismInjury.value)
	const traumaAssessment = useSelector((state) => state.traumaAssessment.value)
	const interventions = useSelector((state) => state.interventions.value)
	const medications = useSelector((state) => state.medications.value)
	const vitalSign = useSelector((state) => state.vitalSign.value)

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
			"Seizure_Assessment": seizure,
			"ToxicExpo_Assessment": toxicExposure,
			"Cardiac_Assessment": cardiacArrest,
			"Chestpain_Assessment": chestPain,
			"Neonatal_Assessment": neonatalAssessment,
			"Obstetric": obstetric,
			"Mechanism_Injury": mechanismInjury,
			"Trauma_Assessment": traumaAssessment,
			"Interventions": interventions,
			"Medications": medications,
			"Vital_Sign": vitalSign,
		}

		axios
			.post('http://localhost:9000/testAPI/create', JSON.stringify(EMSDATA))
			.then(() => console.log('EMS Data Saved'))
			.catch(err => {
				console.error(err);
			});
		setSnackOpen(true)
	}

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				<Link to="/call-details" className={classes.link}>
					<ListItem button onClick={handleDrawerClose}>
						<ListItemIcon><CallIcon color="inherit" /></ListItemIcon>
						<ListItemText primary={"Call Details"} />
					</ListItem>
				</Link>
				<Link to="/assessment" className={classes.link}>
					<ListItem button onClick={handleDrawerClose}>
						<ListItemIcon><AssessmentIcon color="inherit" /></ListItemIcon>
						<ListItemText primary={"Assessment"} />
					</ListItem>
				</Link>
				<Link to="/vital-signs" className={classes.link}>
					<ListItem button onClick={handleDrawerClose}>
						<ListItemIcon><ShowChartIcon color="inherit" /></ListItemIcon>
						<ListItemText primary={"Vital Signs"} />
					</ListItem>
				</Link>
				<Link to="/treatment" className={classes.link}>
					<ListItem button onClick={handleDrawerClose}>
						<ListItemIcon><HealingIcon color="inherit" /></ListItemIcon>
						<ListItemText primary={"Treatment"} />
					</ListItem>
				</Link>
				<Link to="/call-report" className={classes.link}>
					<ListItem button onClick={handleDrawerClose}>
						<ListItemIcon><DescriptionIcon color="inherit" /></ListItemIcon>
						<ListItemText primary={"Call Report"} />
					</ListItem>
				</Link>
			</List>
		</div >
	);

	const action = (
		<IconButton
			size="small"
			aria-label="close"
			color="inherit"
			onClick={handleSnackClose}
		>
			<CloseIcon fontSize="small" />
		</IconButton>
	)

	const container = window !== undefined ? () => window().document.body : undefined;
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar} color={theme.palette.type === 'dark' ? 'default' : 'primary'} elevation={0}>
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
					<Tooltip title="More">
						<IconButton
							id="menu-button"
							color="inherit"
							aria-controls="more-menu"
							aria-haspopup="true"
							onClick={handleMenuClick}
						>
							<MoreIcon />
						</IconButton>
					</Tooltip>
					<Menu
						id="more-menu"
						anchorEl={anchorEl}
						open={openMenu}
						onClose={handleMenuClose}
						MenuListProps={{
							'aria-labelledby': 'menu-button'
						}}
					>
						<MenuItem onClick={colorMode.toggleColorMode} color="inherit">
							{theme.palette.type === 'dark' ? (
								<>
									<ListItemIcon>
										<Brightness7Icon />
									</ListItemIcon>
									Light Mode
								</>
							) : (
								<>
									<ListItemIcon>
										<Brightness4Icon />
									</ListItemIcon>
									Dark Mode
								</>
							)}{' '}
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="side navigation">
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
				<Hidden smDown implementation="css">
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
					<Redirect exact from="/vital-signs" to="/vital-signs/interventions" />
					<Redirect exact from="/treatment" to="/treatment/interventions" />

					<Route path="/operator-info">
						<OperatorInfo />
					</Route>

					<Route exact path="/call-details/:page?"
						render={props =>
							<CallDetails
								{...props}
							/>
						}
					/>

					<Route exact path="/assessment/:page?"
						render={props =>
							<Assessment
								assessmentItems={assessmentItems}
								{...props}
							/>
						}
					/>

					<Route exact path="/vital-signs/:page?"
						render={props =>
							<VitalSigns
								{...props}
							/>
						}
					/>
					<Route exact path="/treatment/:page?"
						render={props =>
							<VitalSigns
								{...props}
							/>
						}
					/>
					<Route path="/call-report">
						{/* <Hospital /> */}
					</Route>
				</Switch>
			</div>
			<Tooltip title="Save data" aria-label="save data">
				<Fab color="secondary" className={classes.fab} onClick={handleSave}>
					<SaveIcon />
				</Fab>
			</Tooltip>
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				open={snackOpen}
				autoHideDuration={5000}
				onClose={handleSnackClose}
				message="Data saved"
				action={action}
				className={classes.snackbar}
			/>


		</div>
	)
}



export default function Dashboard() {
	const [mode, setMode] = React.useState('light');
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					type: mode,
					primary: {
						main: '#fedbd0',
						light: '#ffffff',
						dark: '#caa99f',
						contrastText: '#000000',
					},
					secondary: {
						light: '#600750',
						main: '#903c7c',
						dark: '#340028',
						contrastText: '#ffffff',
					},
				}
			}),
		[mode],
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<DashboardContent />
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}
