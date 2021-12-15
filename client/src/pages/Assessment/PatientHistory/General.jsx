import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../features/patientHistory';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		width: "100%",
		height: "100%",
		padding: theme.spacing(2),
		margin: 'auto',
	},
	formControl: {
		margin: theme.spacing(3),
	},
	textField: {
		width: 120,
	}
}));

const coRespondersList = ["Law Enforcement", "Fire", "Other First Responders", "None"]
const destinationConditions = ["Stable", "Improved", "Deteriorated"]
const treatmentsProvided = ["Yes", "No", "Unknown", "Not applicable"]
const suspectedIntoxication = ["Yes as reported by patient", "Yes as reported by bystander", "Yes as suspected by provider", "Not suspected"];

const General = ({ bodySystems, setBodySystems }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const patientHistory = useSelector((state) => state.patientHistory.value)

	const handleChange = (e) => {
		dispatch(store({
			...patientHistory,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSingleCheckboxChange = (e) => {
		dispatch(store({
			...patientHistory,
			G_DNR_Order: e.target.checked,
		}))
	}

	const handleCheckboxChange = (e, value) => {
		const newBodySystems = [...bodySystems];

		const index = newBodySystems.findIndex(item => item.value === e.target.name)

		newBodySystems[index].checked = e.target.checked;

		setBodySystems(newBodySystems)

		const dataList = bodySystems.filter(obj => obj.checked === true).map(obj => obj.label)

		dispatch(store({
			...patientHistory,
			G_BodySystem: dataList
		}))
	}

	return (
		<Grid container spacing={5}>
			<Grid item container xs={12}>
				<Paper variant="outlined" className={classes.paper}>
					<Grid item xs={12}>
						<Typography variant="subtitle1" component="div">
							<Box fontWeight="fontWeightMedium">
								Body System
							</Box>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<FormControl component="fieldset" className={classes.formControl}>
							<FormGroup row>
								{bodySystems.map((item, index) => (
									<FormControlLabel
										key={index}
										label={item.label}
										control={
											<Checkbox
												key={index}
												checked={item.checked || false}
												value={item.value}
												onChange={(e) => handleCheckboxChange(e, item.value)}
												name={item.value}
											/>
										}
									/>
								))}
							</FormGroup>
						</FormControl>
					</Grid>
				</Paper>
			</Grid>
			<Grid item container spacing={3} xs={12}>
				<Grid item container spacing={2} xs={12} md={6} justifyContent="flex-start" alignItems="center">
					<Grid item>
						<Typography gutterBottom variant="subtitle1" component="div">
							<Box fontWeight="fontWeightMedium">
								Date of Injury
							</Box>
						</Typography>
					</Grid>
					<Grid item xs>
						<TextField
							name="G_Inj_Date"
							variant="outlined"
							color="secondary"
							size="small"
							InputLabelProps={{ shrink: true }}
							type="date"
							autoComplete="date"
							value={patientHistory.G_Inj_Date}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
				</Grid>
				<Grid item container spacing={2} xs={12} md={6} justifyContent="flex-start" alignItems="center">
					<Grid item >
						<Typography gutterBottom variant="subtitle1" component="div">
							<Box fontWeight="fontWeightMedium">
								Time of Injury
							</Box>
						</Typography>
					</Grid>
					<Grid item xs>
						<TextField
							name="G_Inj_Time"
							variant="outlined"
							color="secondary"
							size="small"
							InputLabelProps={{ shrink: true }}
							type="time"
							autoComplete="date"
							value={patientHistory.G_Inj_Time}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
				</Grid>
				<Grid item container spacing={2} xs={12} lg={6} justifyContent="flex-start" alignItems="center">
					<Grid item>
						<Typography gutterBottom variant="subtitle1" component="div">
							<Box fontWeight="fontWeightMedium">
								Co-Responders
							</Box>
						</Typography>
					</Grid>
					<Grid item xs>
						<FormControl
							variant="outlined"
							color="secondary"
							size="small"
							fullWidth
						>
							<Select
								name="G_Co_Responders"
								value={patientHistory.G_Co_Responders || ''}
								onChange={handleChange}
							>
								{coRespondersList.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item container spacing={2} xs={12} lg={6} justifyContent="flex-start" alignItems="center">
					<Grid item>
						<Typography gutterBottom variant="subtitle1" component="div">
							<Box fontWeight="fontWeightMedium">
								Treatment Provided by Co-Responders
							</Box>
						</Typography>
					</Grid>
					<Grid item xs>
						<FormControl
							variant="outlined"
							color="secondary"
							size="small"
							fullWidth
						>
							<Select
								name="G_Treat_Rendered"
								value={patientHistory.G_Treat_Rendered || ''}
								onChange={handleChange}
							>
								{treatmentsProvided.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item container spacing={2} xs={12} lg={6} justifyContent="flex-start" alignItems="center">
					<Grid item>
						<Typography gutterBottom variant="subtitle1" component="div">
							<Box fontWeight="fontWeightMedium">
								Patient Condition at Destination
							</Box>
						</Typography>
					</Grid>
					<Grid item xs>
						<FormControl
							variant="outlined"
							color="secondary"
							size="small"
							fullWidth
						>
							<Select
								name="G_Pt_Condi_Dest"
								value={patientHistory.G_Pt_Condi_Dest || ''}
								onChange={handleChange}
							>
								{destinationConditions.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item container spacing={2} xs={12} md={5} justifyContent="flex-start" alignItems="center">
					<Grid item>
						<Typography gutterBottom variant="subtitle1" component="div">
							<Box fontWeight="fontWeightMedium">
								Patient Displacement
							</Box>
						</Typography>
					</Grid>
					<Grid item xs>
						<FormControl component="fieldset">
							<RadioGroup row aria-label="patient displacement" name="G_Pt_Disp" value={patientHistory.G_Pt_Disp} onChange={handleChange}>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item container spacing={2} xs={12} md={7} lg={9} justifyContent="flex-start" alignItems="center">
					<Grid item>
						<Typography gutterBottom variant="subtitle1" component="div">
							<Box fontWeight="fontWeightMedium">
								Suspected Intoxication
							</Box>
						</Typography>
					</Grid>
					<Grid item xs>
						<FormControl
							variant="outlined"
							color="secondary"
							size="small"
							fullWidth
						>
							<Select
								name="G_Susp_Intoxi"
								value={patientHistory.G_Susp_Intoxi || ''}
								onChange={handleChange}
							>
								{suspectedIntoxication.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item container spacing={2} xs={12} lg={3} justifyContent="flex-start" alignItems="center">
					<Grid item xs>
						<FormControlLabel control={<Checkbox checked={patientHistory.G_DNR_Order || false} name="G_DNR_Order" onChange={handleSingleCheckboxChange} />} label="DNR Order" />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default General
