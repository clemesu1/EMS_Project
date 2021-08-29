import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';

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
		minWidth: 200,
	},
	textField: {
		width: 120,
	}
}));

const serviceCodes = ["1A", "1B", "1C", "1D", "1E", "1F", "1G", "1H", "1I", "1J", "1K", "1L", "1M", "1N", "1O", "1P", "1Q", "1R", "1S", "1T", "1U", "1V", "1W", "1X", "1Y", "1Z", "2A", "2B", "2C", "2D", "2E", "2F", "2G", "2H", "2I", "2J", "2K", "2L", "2M", "2N", "2O", "2P", "2Q", "2R", "2S", "2T", "2U", "2V", "2W", "2X", "2Y", "2Z", "3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H", "3I", "3J", "3K", "3L", "3M", "3N", "3O", "3P", "3Q", "3R", "3S", "3T", "3U", "3V", "3W", "3X", "3Y", "3Z", "4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I", "4J", "4K", "4L", "4M", "4N", "4O", "4P", "4Q", "4R", "4S", "4T", "4U", "4V", "4W", "4X", "4Y", "4Z", "5A", "5B", "5C", "5D", "5E", "5F", "5G", "5H", "5I", "5J", "5K", "5L", "5M", "5N", "5O", "5P", "5Q", "5R", "5S", "5T", "5U", "5V", "5W", "5X", "5Y", "5Z", "6A", "6B", "6C", "6D", "6E", "6F", "6G", "6H", "6I", "6J", "6K", "6L", "6M", "6N", "6O", "6P", "6Q", "6R", "6S", "6T", "6U", "6V", "6W", "6X", "6Y", "6Z", "7A", "7B", "7C", "7D", "7E", "7F", "7G", "7H", "7I", "7J", "7K", "7L", "7M", "7N", "7O", "7P", "7Q", "7R", "7S", "7T", "7U", "7V", "7W", "7X", "7Y", "7Z", "8A", "8B", "8C", "8D", "8E", "8F", "8G", "8H", "8I", "8J", "8K", "8L", "8M", "8N", "8O", "8P", "8Q", "8R", "8S", "8T", "8U", "8V", "8W", "8X", "8Y", "8Z", "9A", "9B", "9C", "9D", "9E", "9F", "9G", "9H", "9I", "9J", "9K", "9L", "9M", "9N", "9O", "9P", "9Q", "9R", "9S", "9T", "9U", "9V", "9W", "9X", "9Y", "9Z"];
const serviceTypes = ["911", "IHT (Scheduled)", "IHT (Unscheduled)", "Intercept", "Mutual Aid", "Stand By"];
const incidentLocations = ["Yes", "No"];
const destinationDeterminations = ["Protocol", "Patient or Family preference", "Closest facility", "Diversion", "Law Enforcement Choice", "On-Line Md Choice", "Patient's Md Choice", "Specialty Resource Centre", "Other"];
const destinationLocationTypes = ["Hospital", "EMH ", "Nursing home", "Recreation / sport area", "Doctor's office", "Airport", "Job site", "Highway or street", "Residence", "Public building", "Educational institution", "Other EMS unit", "Other"];
const sceneFacilityCodes = ["15  ", "39", "61", "22", "51", "62", "53", "41", "31", "35", "42", "27", "36", "63", "37", "33", "72", "11", "12", "34", "49", "48", "13", "23", "25", "43", "14", "32", "21", "26", "64", "38"];
const facilityCodes = ["Saint John Regional Hospital", "St. Joseph's Hospital", "Ridewood Veterans Wing", "Sussex Health Center", "Fundy Health Center", "Charlotte County Hospital", "DECH", "Loch Lomond Villa", "Saint John Saint Stephen Nursing Home", "Kennebec Manor", "Centracare", "Carleton Kirk Nursing Home", "Rocmaura Nursing Home", "Ruth Ross", "Grand Bay Rehab", "Turnbull Nursing Home", "VA Snow Center"];
const patientDispositions = ["Treated and Transported By Ambulance Crew", "Treated and Transported By Private Vehicle", "Treated and Released", "Patient Assessed and Transferred to Other Agency at Scene", "Advanced Life Support Intercept", "No Treatment Rendered", "Patient Refused Treatment", "DOA", "Call Cancelled En Route", "No Patient Found", "Other"];
const factorsAffectingEMS = ["Adverse weather", "Adverse road conditions", "Vehicle problems", "Unsafe scene", "Prolonged extrication (>20 min)", "Hazardous materials", "Inaccurate or Incomplete directions", "Other"];

const IncidentDetails = ({ state, setState, patientDetails }) => {
	const classes = useStyles();

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	const handleAddressSame = (e) => {
		e.preventDefault();
		setState({
			...state,
			Inc_Street: patientDetails.Street,
			Inc_Community: patientDetails.Community,
			Inc_Province: patientDetails.Province,
			Inc_PostalCode: patientDetails.PostalCode,
		})
	}

	return (
		<form className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} container spacing={2} >
					<Grid item xs={3} container spacing={2} justifyContent="flex-start" alignItems="center">
						<Grid item>
							<Typography gutterBottom variant="subtitle1" component="div">
								<Box fontWeight="fontWeightMedium">
									Service Code
								</Box>
							</Typography>
						</Grid>
						<Grid item xs>
							<FormControl
								variant="outlined"
								color="secondary"
								size="small"
							>
								<Select
									name="Service_Code"
									value={state.Service_Code}
									onChange={handleChange}

								>
									{serviceCodes.map((item, index) => (
										<MenuItem key={index} value={item}>{item}</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
					</Grid>
					<Grid item xs={5} container spacing={2} justifyContent="flex-start" alignItems="center" direction="column">
						<Grid item container spacing={2} alignItems="center">
							<Grid item >
								<Typography gutterBottom variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Service Type
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
										name="Service_Type"
										value={state.Service_Type}
										onChange={handleChange}

									>
										{serviceTypes.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>
						<Grid item container spacing={2} alignItems="center">
							<Grid item>
								<Typography gutterBottom variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Dispatch Code
									</Box>
								</Typography>
							</Grid>
							<Grid item xs>
								<TextField
									name="Dispatch_Code"
									variant="outlined"
									color="secondary"
									size="small"
									value={state.Dispatch_Code}
									onChange={handleChange}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={4} container spacing={2} justifyContent="flex-start" alignItems="center" direction="column">
						<Grid item container spacing={2} alignItems="center">
							<Grid item>
								<Typography gutterBottom variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Date of Incident
									</Box>
								</Typography>
							</Grid>
							<Grid item xs>
								<TextField
									name="Date_of_Incident"
									label="Date Of Incident"
									variant="outlined"
									color="secondary"
									size="small"
									InputLabelProps={{ shrink: true }}
									type="date"
									autoComplete="date"
									value={state.Date_of_Incident}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
						</Grid>
						<Grid item container spacing={2} alignItems="center">
							<Grid item>
								<Typography gutterBottom variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Time of Incident
									</Box>
								</Typography>
							</Grid>
							<Grid item xs>
								<TextField
									name="Time_of_Incident"
									label="Time Of Incident"
									variant="outlined"
									color="secondary"
									size="small"
									InputLabelProps={{ shrink: true }}
									type="time"
									autoComplete="date"
									value={state.Time_of_Incident}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} container spacing={2} justifyContent="flex-start" alignItems="center" direction="column">
						<Paper variant="outlined" className={classes.paper}>
							<Grid item xs={12}>
								<Typography gutterBottom variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Incident Location
									</Box>
								</Typography>
							</Grid>
							<Grid item container xs={12} justifyContent="flex-start" alignItems="center" spacing={2}>
								<Grid item xs={10}>
									<TextField
										name="Inc_Street"
										label="Street"
										variant="outlined"
										color="secondary"
										size="small"
										autoComplete="street-address"
										value={state.Inc_Street}
										onChange={handleChange}
										fullWidth
									/>
								</Grid>
								<Grid item xs={2}>
									<Button
										variant="outlined"
										color="secondary"
										fullWidth
										onClick={handleAddressSame}
									>
										Same as Pt Address
									</Button>
								</Grid>
								<Grid item xs={4}>
									<TextField
										name="Inc_Community"
										label="Community"
										variant="outlined"
										color="secondary"
										size="small"
										autoComplete="address-level1"
										value={state.Inc_Community}
										onChange={handleChange}
										fullWidth
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										name="Inc_Province"
										label="Province"
										variant="outlined"
										color="secondary"
										size="small"
										autoComplete="address-level1"
										value={state.Inc_Province}
										onChange={handleChange}
										fullWidth
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										name="Inc_PostalCode"
										label="Postal Code"
										variant="outlined"
										color="secondary"
										size="small"
										autoComplete="postal-code"
										value={state.Inc_PostalCode}
										onChange={handleChange}
										fullWidth
									/>
								</Grid>
							</Grid>
						</Paper>
					</Grid>

					<Grid item xs={12} container spacing={2} justifyContent="flex-start" alignItems="center">
						<Grid item xs={6} container spacing={2} justifyContent="flex-start" alignItems="center">
							<Grid item>
								<Typography gutterBottom variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Incident Location
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
										name="Inc_Loc_Type"
										value={state.Inc_Loc_Type}
										onChange={handleChange}

									>
										{incidentLocations.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>

						<Grid item xs={6} container spacing={2} justifyContent="flex-start" alignItems="center">
							{state.Dest_Determinant !== 'Other' ? '' :
								<>
									<Grid item>
										<Typography gutterBottom variant="subtitle1" component="div">
											<Box fontWeight="fontWeightMedium">
												Other
											</Box>
										</Typography>
									</Grid>
									<Grid item xs>
										<TextField
											name="DD_Other"
											variant="outlined"
											color="secondary"
											size="small"
											fullWidth
											value={state.DD_Other}
											onChange={handleChange}
										/>
									</Grid>
								</>
							}

						</Grid>
						<Grid item xs={6} container spacing={2} justifyContent="flex-start" alignItems="center">
							<Grid item>
								<Typography gutterBottom variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Destination Determination
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
										name="Dest_Determinant"
										value={state.Dest_Determinant}
										onChange={handleChange}

									>
										{destinationDeterminations.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>
						<Grid item xs={6} container spacing={2} justifyContent="flex-start" alignItems="center">
							<Grid item>
								<Typography gutterBottom variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Geographic Locator
									</Box>
								</Typography>
							</Grid>
							<Grid item xs>
								<TextField
									name="Geo_Locator"
									variant="outlined"
									color="secondary"
									size="small"
									fullWidth
									value={state.Geo_Locator}
									onChange={handleChange}
								/>
							</Grid>
						</Grid>
						<Grid item xs={6} container spacing={2} justifyContent="flex-start" alignItems="center">
							<Grid item>
								<Typography gutterBottom variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Destination Location Type
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
										name="Dest_Loc_Type"
										value={state.Dest_Loc_Type}
										onChange={handleChange}
									>
										{destinationLocationTypes.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>
						<Grid item xs={6} container spacing={2} justifyContent="flex-start" alignItems="center">
							<Grid item>
								<Typography gutterBottom variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Scene Facility Code
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
										name="Scene_Facility_Code"
										value={state.Scene_Facility_Code}
										onChange={handleChange}
									>
										{sceneFacilityCodes.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} container spacing={2} justifyContent="flex-start" alignItems="center" direction="column">
						<Paper variant="outlined" className={classes.paper}>
							<Grid item xs={12}>
								<Typography gutterBottom variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Destination Location
									</Box>
								</Typography>
							</Grid>
							<Grid item container xs={12} justifyContent="flex-start" alignItems="center" spacing={2}>
								<Grid item xs={6}>
									<FormControl
										variant="outlined"
										color="secondary"
										size="small"
										fullWidth
									>
										<InputLabel id="select-facility-code-label">Facility Code</InputLabel>
										<Select
											labelId="select-facility-code-label"
											label="Facility Code"
											name="Dest_Facility_Code"
											value={state.Dest_Facility_Code}
											onChange={handleChange}
										>
											{facilityCodes.map((item, index) => (
												<MenuItem key={index} value={item}>{item}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={6}>
									<TextField
										name="Dest_Street"
										label="Street"
										variant="outlined"
										color="secondary"
										size="small"
										autoComplete="street-address"
										value={state.Dest_Street}
										onChange={handleChange}
										fullWidth
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										name="Dest_Community"
										label="Community"
										variant="outlined"
										color="secondary"
										size="small"
										autoComplete="address-level1"
										value={state.Dest_Community}
										onChange={handleChange}
										fullWidth
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										name="Dest_Province"
										label="Province"
										variant="outlined"
										color="secondary"
										size="small"
										autoComplete="address-level1"
										value={state.Dest_Province}
										onChange={handleChange}
										fullWidth
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										name="Dest_PostalCode"
										label="Postal Code"
										variant="outlined"
										color="secondary"
										size="small"
										autoComplete="postal-code"
										value={state.Dest_PostalCode}
										onChange={handleChange}
										fullWidth
									/>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={12} container spacing={2} justifyContent="flex-start" alignItems="center">
						<Grid item container xs={2} spacing={2} justifyContent="flex-start" alignItems="center">
							<Grid item>
								<Typography variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Patient Contact
									</Box>
								</Typography>
							</Grid>
							<Grid item xs>
								<FormControl
									variant="outlined"
									color="secondary"
									size="small"
								>
									<Select
										name="Patient_Contact"
										value={state.Patient_Contact}
										onChange={handleChange}
									>
										<MenuItem value={"No"}>No</MenuItem>
										<MenuItem value={"Yes"}>Yes</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
						<Grid item container xs={6} spacing={2} justifyContent="flex-start" alignItems="center">
							<Grid item>
								<Typography variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Patient Disposition
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
										name="Patient_Disposition"
										value={state.Patient_Disposition}
										onChange={handleChange}

									>
										{patientDispositions.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>
						<Grid item container xs={4} spacing={2} justifyContent="flex-start" alignItems="center">
							{state.Patient_Disposition !== 'Other' ? '' :
								<>
									<Grid item>
										<Typography variant="subtitle1" component="div">
											<Box fontWeight="fontWeightMedium">
												Other
											</Box>
										</Typography>
									</Grid>
									<Grid item xs>
										<TextField
											name="Pt_Disp_Other"
											variant="outlined"
											color="secondary"
											size="small"
											fullWidth
											value={state.Pt_Disp_Other}
											onChange={handleChange}
										/>
									</Grid>
								</>
							}
						</Grid>

						<Grid item container xs={6} spacing={2} direction="column" justifyContent="center" alignItems="flex-start">
							<Grid item xs={12} container spacing={2} alignItems="center">
								<Grid item>
									<Typography variant="subtitle1" component="div">
										<Box fontWeight="fontWeightMedium">
											Factors Affecting EMS
										</Box>
									</Typography>
								</Grid>
								<Grid item xs>
									<FormControl
										variant="outlined"
										color="secondary"
										size="small"
										fullWidth
										className={classes.formControl}
									>
										<Select
											name="Fact_Affect_EMS"
											value={state.Fact_Affect_EMS}
											onChange={handleChange}

										>
											{factorsAffectingEMS.map((item, index) => (
												<MenuItem key={index} value={item}>{item}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
							</Grid>
							<Grid item xs={12} container spacing={2} alignItems="center" justifyContent="flex-end">
								{state.Fact_Affect_EMS !== 'Other' ? '' :
									<>
										<Grid item>
											<Typography variant="subtitle1" component="div">
												<Box fontWeight="fontWeightMedium">
													Other
												</Box>
											</Typography>
										</Grid>
										<Grid item xs>
											<TextField
												name="Fact_Other"
												variant="outlined"
												color="secondary"
												size="small"
												fullWidth
												value={state.Fact_Other}
												onChange={handleChange}
											/>
										</Grid>
									</>
								}
							</Grid>
						</Grid>
						<Grid item container xs={6} spacing={2} justifyContent="center" alignItems="center">
							<Paper variant="outlined" className={classes.paper}>
								<Grid item xs={12}>
									<Typography gutterBottom variant="subtitle1" component="div">
										<Box fontWeight="fontWeightMedium">
											Service Payment
										</Box>
									</Typography>
								</Grid>
								<Grid item container xs={12} spacing={2} justifyContent="center" alignItems="center">
									<Grid item container xs={6} spacing={2} justifyContent="center" alignItems="center">
										<Grid item>
											<Typography gutterBottom variant="subtitle1" component="div">
												<Box fontWeight="fontWeightMedium">
													Responsibility
												</Box>
											</Typography>
										</Grid>
										<Grid item>
											<TextField
												name="Service_Payment_Respons"
												variant="outlined"
												color="secondary"
												size="small"
												value={state.Service_Payment_Respons}
												onChange={handleChange}
											/>
										</Grid>
									</Grid>
									<Grid item container xs={6} spacing={2} justifyContent="center" alignItems="center">
										<Grid item>
											<Typography gutterBottom variant="subtitle1" component="div">
												<Box fontWeight="fontWeightMedium">
													Number
												</Box>
											</Typography>
										</Grid>
										<Grid item>
											<TextField
												name="Service_Payment_Number"
												variant="outlined"
												color="secondary"
												size="small"
												value={state.Service_Payment_Number}
												onChange={handleChange}
											/>
										</Grid>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

		</form >
	)
}

export default IncidentDetails
