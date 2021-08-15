import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Select, TextField, FormControl, MenuItem, InputLabel, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import MuiPhoneNumber from 'material-ui-phone-number';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	formControl: {
		minWidth: 120,
	},
}));


const races = ["African American", "Asian", "Caucasian", "Hispanic", "Latino", "Native"];
const ages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
const medicareOrigins = ["NB", "NS", "PE", "NF", "QC", "ON", "MAN", "SK", "AB", "BC", "Yukon", "NWT", "Nunavut"];

const PatientDetails = ({ state, setState }) => {
	const classes = useStyles();

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	const handlePhoneChange = (value) => {
		setState({
			...state,
			Tel_No: value
		})
	}

	return (
		<form className={classes.root}>
			<Grid container spacing={3} justifyContent="center" alignItems="center">
				<Grid item xs={12} container spacing={2}>
					<Grid item xs={6}>
						<TextField
							name="Surname"
							label="Surname"
							variant="outlined"
							color="secondary"
							size="small"
							autoComplete="family-name"
							value={state.Surname}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							name="Given_Name"
							label="First Name"
							variant="outlined"
							color="secondary"
							size="small"
							autoComplete="given-name"
							value={state.Given_Name}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							name="Street"
							label="Street"
							variant="outlined"
							color="secondary"
							size="small"
							autoComplete="street-address"
							value={state.Street}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							name="Community"
							label="Community"
							variant="outlined"
							color="secondary"
							size="small"
							autoComplete="address-level1"
							value={state.Community}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							name="Province"
							label="Province"
							variant="outlined"
							color="secondary"
							size="small"
							autoComplete="address-level1"
							value={state.Province}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							name="PostalCode"
							label="Postal Code"
							variant="outlined"
							color="secondary"
							size="small"
							autoComplete="postal-code"
							value={state.PostalCode}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							name="Country"
							label="Country"
							variant="outlined"
							color="secondary"
							size="small"
							autoComplete="country-name"
							value={state.Country}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={4}>
						<MuiPhoneNumber
							name="Tel_No"
							label="Telephone"
							variant="outlined"
							color="secondary"
							size="small"
							autoComplete="tel"
							defaultCountry="ca"
							value={state.Tel_No}
							onChange={handlePhoneChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={4}>
						<FormControl
							variant="outlined"
							color="secondary"
							size="small"
							className={classes.formControl}
							fullWidth
						>
							<InputLabel id="select-race-label">Race</InputLabel>
							<Select
								labelId="select-race-label"
								label="Race"
								name="Race"
								value={state.Race}
								onChange={handleChange}
							>
								{races.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						<TextField
							name="DOB"
							label="Date Of Birth"
							variant="outlined"
							color="secondary"
							size="small"
							InputLabelProps={{ shrink: true }}
							type="date"
							autoComplete="bday"
							value={state.DOB}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={4}>
						<FormControl
							variant="outlined"
							color="secondary"
							size="small"
							className={classes.formControl}
							fullWidth
						>
							<InputLabel id="select-age-label">Age</InputLabel>
							<Select
								labelId="select-age-label"
								label="Age"
								name="Age"
								value={state.Age}
								onChange={handleChange}
							>
								{ages.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={4} container>
						<FormControl component="fieldset">
							<FormLabel component="legend" color="secondary">Gender</FormLabel>
							<RadioGroup row aria-label="gender" name="Gender" value={state.Gender} onChange={handleChange}>
								<FormControlLabel value="Male" control={<Radio />} label="Male" />
								<FormControlLabel value="Female" control={<Radio />} label="Female" />
								<FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						<TextField
							name="Medicare_No"
							label="Medicare #"
							variant="outlined"
							color="secondary"
							size="small"
							inputProps={{ maxLength: 9 }}
							value={state.Medicare_No}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={4}>
						<FormControl
							variant="outlined"
							color="secondary"
							size="small"
							className={classes.formControl}
							fullWidth
						>
							<InputLabel id="select-medicare-origin-label">Medicare Origin</InputLabel>
							<Select
								labelId="select-medicare-origin-label"
								label="Medicare Origin"
								name="Medicare_Origin"
								value={state.Medicare_Origin}
								onChange={handleChange}
							>
								{medicareOrigins.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						<TextField
							name="Hospital_Chart_No"
							label="Hospital Chart #"
							variant="outlined"
							color="secondary"
							size="small"
							value={state.Hospital_Chart_No}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
					<TextField
							name="P_Comments"
							label="Comments"
							variant="outlined"
							color="secondary"
							size="small"
							multiline
							rows={4}
							value={state.P_Comments}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
				</Grid>
			</Grid>
		</form>
	)
}

export default PatientDetails
