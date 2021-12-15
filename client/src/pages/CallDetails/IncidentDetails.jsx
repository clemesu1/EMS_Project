import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { saveIncidentDetails } from '../../features/incidentDetails';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import InputMask from "react-input-mask";

const serviceCodes = ["1A", "1B", "1C", "1D", "1E", "1F", "1G", "1H", "1I", "1J", "1K", "1L", "1M", "1N", "1O", "1P", "1Q", "1R", "1S", "1T", "1U", "1V", "1W", "1X", "1Y", "1Z", "2A", "2B", "2C", "2D", "2E", "2F", "2G", "2H", "2I", "2J", "2K", "2L", "2M", "2N", "2O", "2P", "2Q", "2R", "2S", "2T", "2U", "2V", "2W", "2X", "2Y", "2Z", "3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H", "3I", "3J", "3K", "3L", "3M", "3N", "3O", "3P", "3Q", "3R", "3S", "3T", "3U", "3V", "3W", "3X", "3Y", "3Z", "4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I", "4J", "4K", "4L", "4M", "4N", "4O", "4P", "4Q", "4R", "4S", "4T", "4U", "4V", "4W", "4X", "4Y", "4Z", "5A", "5B", "5C", "5D", "5E", "5F", "5G", "5H", "5I", "5J", "5K", "5L", "5M", "5N", "5O", "5P", "5Q", "5R", "5S", "5T", "5U", "5V", "5W", "5X", "5Y", "5Z", "6A", "6B", "6C", "6D", "6E", "6F", "6G", "6H", "6I", "6J", "6K", "6L", "6M", "6N", "6O", "6P", "6Q", "6R", "6S", "6T", "6U", "6V", "6W", "6X", "6Y", "6Z", "7A", "7B", "7C", "7D", "7E", "7F", "7G", "7H", "7I", "7J", "7K", "7L", "7M", "7N", "7O", "7P", "7Q", "7R", "7S", "7T", "7U", "7V", "7W", "7X", "7Y", "7Z", "8A", "8B", "8C", "8D", "8E", "8F", "8G", "8H", "8I", "8J", "8K", "8L", "8M", "8N", "8O", "8P", "8Q", "8R", "8S", "8T", "8U", "8V", "8W", "8X", "8Y", "8Z", "9A", "9B", "9C", "9D", "9E", "9F", "9G", "9H", "9I", "9J", "9K", "9L", "9M", "9N", "9O", "9P", "9Q", "9R", "9S", "9T", "9U", "9V", "9W", "9X", "9Y", "9Z"];
const serviceTypes = ["911", "IHT (Scheduled)", "IHT (Unscheduled)", "Intercept", "Mutual Aid", "Stand By"];
const destinationDeterminations = ["Protocol", "Patient or Family preference", "Closest facility", "Diversion", "Law Enforcement Choice", "On-Line Md Choice", "Patient's Md Choice", "Specialty Resource Centre", "Other"];
const destinationLocationTypes = ["Hospital", "EMH ", "Nursing home", "Recreation / sport area", "Doctor's office", "Airport", "Job site", "Highway or street", "Residence", "Public building", "Educational institution", "Other EMS unit", "Other"];
const sceneFacilityCodes = ["15  ", "39", "61", "22", "51", "62", "53", "41", "31", "35", "42", "27", "36", "63", "37", "33", "72", "11", "12", "34", "49", "48", "13", "23", "25", "43", "14", "32", "21", "26", "64", "38"];
const facilityCodes = ["Saint John Regional Hospital", "St. Joseph's Hospital", "Ridewood Veterans Wing", "Sussex Health Center", "Fundy Health Center", "Charlotte County Hospital", "DECH", "Loch Lomond Villa", "Saint John Saint Stephen Nursing Home", "Kennebec Manor", "Centracare", "Carleton Kirk Nursing Home", "Rocmaura Nursing Home", "Ruth Ross", "Grand Bay Rehab", "Turnbull Nursing Home", "VA Snow Center"];
const patientDispositions = ["Treated and Transported By Ambulance Crew", "Treated and Transported By Private Vehicle", "Treated and Released", "Patient Assessed and Transferred to Other Agency at Scene", "Advanced Life Support Intercept", "No Treatment Rendered", "Patient Refused Treatment", "DOA", "Call Cancelled En Route", "No Patient Found", "Other"];
const factorsAffectingEMS = ["Adverse weather", "Adverse road conditions", "Vehicle problems", "Unsafe scene", "Prolonged extrication (>20 min)", "Hazardous materials", "Inaccurate or Incomplete directions", "Other"];

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		width: '100%',
	},
}));

const IncidentDetails = () => {
	const classes = useStyles();	
	const dispatch = useDispatch();
	const incidentDetails = useSelector((state) => state.incidentDetails.value)
	const patientDetails = useSelector((state) => state.patientDetails.value)

	const handleChange = (e) => {
		dispatch(saveIncidentDetails({
			...incidentDetails,
			[e.target.name]: e.target.value,
		}));
	}

	const handleAddressSame = (e) => {
		e.preventDefault();
		dispatch(saveIncidentDetails({
			...incidentDetails,
			Inc_Street: patientDetails.Street,
			Inc_Community: patientDetails.Community,
			Inc_Province: patientDetails.Province,
			Inc_PostalCode: patientDetails.PostalCode,
		}))
	}

	return (
		<Container maxWidth="xl">
			<Grid container spacing={3} justifyContent="center">
				<Grid item container xs={12} spacing={2} alignItems="center" justifyContent="center">
					<Grid item xs={12} md={4} lg={3}>
						<FormControl
							variant="filled"
							color="secondary"
							size="small"
							fullWidth
						>
							<InputLabel id="service-code-label">Service Code</InputLabel>
							<Select
								labelId="service-code-label"
								id="service-code"
								name="Service_Code"
								value={incidentDetails.Service_Code || ''}
								onChange={handleChange}
								label="Service Code"
							>
								{serviceCodes.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item container xs={12} md={4} lg={5} spacing={2} >
						<Grid item xs={6} md={12}>
							<FormControl
								variant="filled"
								color="secondary"
								size="small"
								fullWidth
							>
								<InputLabel id="service-type-label">Service Type</InputLabel>
								<Select
									labelId="service-type-label"
									id="service-type"
									name="Service_Type"
									value={incidentDetails.Service_Type || ''}
									onChange={handleChange}
									label="Service Type"
								>
									{serviceTypes.map((item, index) => (
										<MenuItem key={index} value={item}>{item}</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={6} md={12} lg={6}>
							<InputMask mask="99-aa-99" value={incidentDetails.Dispatch_Code} onChange={handleChange}>
								<TextField
									variant="filled"
									size="small"
									color="secondary"
									label="Dispatch Code"
									name="Dispatch_Code"
									fullWidth
								/>
							</InputMask>
						</Grid>
					</Grid>
					<Grid item container xs={12} md={4} lg={4} spacing={2} >
						<Grid item xs={12} >
							<TextField
								name="Date_of_Incident"
								label="Date Of Incident"
								variant="filled"
								color="secondary"
								size="small"
								InputLabelProps={{ shrink: true }}
								type="date"
								autoComplete="date"
								value={incidentDetails.Date_of_Incident}
								onChange={handleChange}
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="Time_of_Incident"
								label="Time Of Incident"
								variant="filled"
								color="secondary"
								size="small"
								InputLabelProps={{ shrink: true }}
								type="time"
								autoComplete="date"
								value={incidentDetails.Time_of_Incident}
								onChange={handleChange}
								fullWidth
							/>
						</Grid>
					</Grid>

				</Grid>
				<Grid item container xs={12}>
					<Paper variant="outlined" className={classes.paper}>
						<Typography
							color="textSecondary"
							gutterBottom
						>
							Incident Location
						</Typography>
						<Grid item container xs={12} spacing={2} alignItems="center">
							<Grid item xs={6} md={9} lg={10}>
								<TextField
									name="Inc_Street"
									label="Street"
									variant="filled"
									color="secondary"
									size="small"
									autoComplete="street-address"
									value={incidentDetails.Inc_Street}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={6} md={3} lg={2}>
								<Button
									variant="contained"
									fullWidth
									onClick={handleAddressSame}
								>
									Same as Pt Address
								</Button>
							</Grid>
							<Grid item xs={12} md={4}>
								<TextField
									name="Inc_Community"
									label="Community"
									variant="filled"
									color="secondary"
									size="small"
									autoComplete="address-level1"
									value={incidentDetails.Inc_Community}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={6} md={4}>
								<TextField
									name="Inc_Province"
									label="Province"
									variant="filled"
									color="secondary"
									size="small"
									autoComplete="address-level1"
									value={incidentDetails.Inc_Province}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={6} md={4}>
								<TextField
									name="Inc_PostalCode"
									label="Postal Code"
									variant="filled"
									color="secondary"
									size="small"
									autoComplete="postal-code"
									value={incidentDetails.Inc_PostalCode}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
					<Grid item xs={12} md={6} lg={7}>
						<FormControl
							variant="filled"
							color="secondary"
							size="small"
							fullWidth
						>
							<InputLabel id="dest-determinant-label">Destination Determination</InputLabel>
							<Select
								labelId="dest-determinant-label"
								id="dest-determinant"
								name="Dest_Determinant"
								value={incidentDetails.Dest_Determinant || ''}
								onChange={handleChange}
								label="Destination Determination"
							>
								{destinationDeterminations.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={6} lg={5}>
						{incidentDetails.Dest_Determinant !== "Other" ? '' : (
							<TextField
								variant="filled"
								size="small"
								color="secondary"
								label="Other"
								name="DD_Other"
								value={incidentDetails.DD_Other}
								onChange={handleChange}
								fullWidth
							/>
						)}
					</Grid>
					<Grid item xs={12} md={6} lg={7}>
						<FormControl
							variant="filled"
							color="secondary"
							size="small"
							fullWidth
						>
							<InputLabel id="incident-location-type-label">Incident Location Type</InputLabel>
							<Select
								labelId="incident-location-type-label"
								id="incident-location-type"
								name="Inc_Loc_Type"
								value={incidentDetails.Inc_Loc_Type || ''}
								onChange={handleChange}
								label="Incident Location Type"
							>
								<MenuItem value={"Yes"}>Yes</MenuItem>
								<MenuItem value={"No"}>No</MenuItem>

							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={6} lg={5}>
						<TextField
							name="Geo_Locator"
							label="Geographic Locator"
							variant="filled"
							color="secondary"
							size="small"
							value={incidentDetails.Geo_Locator}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} md={6} lg={7}>
						<FormControl
							variant="filled"
							color="secondary"
							size="small"
							fullWidth
						>
							<InputLabel id="destination-location-type-label">Destination Location Type</InputLabel>
							<Select
								labelId="destination-location-type-label"
								id="destination-location-type"
								name="Dest_Loc_Type"
								value={incidentDetails.Dest_Loc_Type || ''}
								onChange={handleChange}
								label="Destination Location Type"
							>
								{destinationLocationTypes.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={6} lg={5}>
						<FormControl
							variant="filled"
							color="secondary"
							size="small"
							fullWidth
						>
							<InputLabel id="scene-facility-code-label">Scene Facility Code</InputLabel>
							<Select
								labelId="scene-facility-code-label"
								id="scene-facility-code"
								name="Scene_Facility_Code"
								value={incidentDetails.Scene_Facility_Code || ''}
								onChange={handleChange}
								label="Scene Facility Code"
							>
								{sceneFacilityCodes.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				<Grid item container xs={12} >
					<Paper variant="outlined" className={classes.paper}>
						<Typography
							color="textSecondary"
							gutterBottom
						>
							Destination Location
						</Typography>
						<Grid item container xs={12} spacing={2} alignItems="center">
							<Grid item xs={12} md={6}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
								>
									<InputLabel id="dest-facility-code-label">Facility Code</InputLabel>
									<Select
										labelId="dest-facility-code-label"
										id="dest-facility-code"
										name="Dest_Facility_Code"
										value={incidentDetails.Dest_Facility_Code || ''}
										onChange={handleChange}
										label="Facility Code"
									>
										{facilityCodes.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name="Dest_Street"
									label="Street"
									variant="filled"
									color="secondary"
									size="small"
									autoComplete="street-address"
									value={incidentDetails.Dest_Street}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<TextField
									name="Dest_Community"
									label="Community"
									variant="filled"
									color="secondary"
									size="small"
									autoComplete="address-level1"
									value={incidentDetails.Dest_Community}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={6} md={4}>
								<TextField
									name="Dest_Province"
									label="Province"
									variant="filled"
									color="secondary"
									size="small"
									autoComplete="address-level1"
									value={incidentDetails.Dest_Province}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={6} md={4}>
								<TextField
									name="Dest_PostalCode"
									label="Postal Code"
									variant="filled"
									color="secondary"
									size="small"
									autoComplete="postal-code"
									value={incidentDetails.Dest_PostalCode}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item container xs={12} spacing={2}>
					<Grid item xs={12} lg={3}>
						<FormControl
							variant="filled"
							color="secondary"
							size="small"
							fullWidth
						>
							<InputLabel id="patient-contact-label">Patient Contact</InputLabel>
							<Select
								labelId="patient-contact-label"
								id="patient-contact"
								name="Patient_Contact"
								value={incidentDetails.Patient_Contact || ''}
								onChange={handleChange}
								label="Patient Contact"
							>
								<MenuItem value={"Yes"}>Yes</MenuItem>
								<MenuItem value={"No"}>No</MenuItem>

							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6} lg={5}>
						<FormControl
							variant="filled"
							color="secondary"
							size="small"
							fullWidth
						>
							<InputLabel id="patient-disposition-label">Patient Disposition</InputLabel>
							<Select
								labelId="patient-disposition-label"
								id="patient-disposition"
								name="Patient_Disposition"
								value={incidentDetails.Patient_Disposition || ''}
								onChange={handleChange}
								label="Patient Disposition"
							>
								{patientDispositions.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6} lg={4}>
						{incidentDetails.Patient_Disposition !== "Other" ? '' : (
							<TextField
								variant="filled"
								size="small"
								color="secondary"
								label="Other"
								name="Pt_Disp_Other"
								value={incidentDetails.Pt_Disp_Other}
								onChange={handleChange}
								fullWidth
							/>
						)}
					</Grid>
				</Grid>
				<Grid item container xs={12} md={6} spacing={2}>
					<Grid item xs={12} sm={6} md={12}>
						<FormControl
							variant="filled"
							color="secondary"
							size="small"
							fullWidth
						>
							<InputLabel id="fact-affect-ems-label">Factors Affecting EMS</InputLabel>
							<Select
								labelId="fact-affect-ems-label"
								id="fact-affect-ems"
								name="Fact_Affect_EMS"
								value={incidentDetails.Fact_Affect_EMS || ''}
								onChange={handleChange}
								label="Factors Affecting EMS"
							>
								{factorsAffectingEMS.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6} md={12}>
						{incidentDetails.Fact_Affect_EMS !== "Other" ? '' : (
							<TextField
								variant="filled"
								size="small"
								color="secondary"
								label="Other"
								name="Fact_Other"
								value={incidentDetails.Fact_Other}
								onChange={handleChange}
								fullWidth
							/>
						)}
					</Grid>
				</Grid>
				<Grid item container xs={12} md={6}>
					<Paper variant="outlined" className={classes.paper}>
						<Typography
							color="textSecondary"
							gutterBottom
						>
							Service Payment
						</Typography>
						<Grid item container xs={12} alignItems="center" spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="filled"
									size="small"
									color="secondary"
									label="Response"
									name="Service_Payment_Respons"
									value={incidentDetails.Service_Payment_Respons}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="filled"
									size="small"
									color="secondary"
									label="Number"
									name="Service_Payment_Number"
									value={incidentDetails.Service_Payment_Number}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}

export default IncidentDetails
