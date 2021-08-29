import { Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core'
import React from 'react'
import MuiPhoneNumber from 'material-ui-phone-number';

const races = ["African American", "Asian", "Caucasian", "Hispanic", "Latino", "Native"];
const ages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
const medicareOrigins = ["NB", "NS", "PE", "NF", "QC", "ON", "MAN", "SK", "AB", "BC", "Yukon", "NWT", "Nunavut"];

const PatientDetails = ({ state, setState }) => {

	const handleChange = (e) => {
		setState(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}

	const handlePhoneChange = (value) => {
		setState(prev => ({
			...prev,
			Tel_No: value,
		}));
	}


	return (
		<Container maxWidth="lg">
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						label="Surname"
						variant="filled"
						size="small"
						name="Surname"
						color="secondary"
						autoComplete="family-name"
						value={state.Surname}
						onChange={handleChange}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						label="First Name"
						variant="filled"
						size="small"
						color="secondary"
						name="Given_Name"
						autoComplete="given-name"
						value={state.Given_Name}
						onChange={handleChange}
						fullWidth
					/>
				</Grid>
				<Grid item xs={6} md={12}>
					<TextField
						label="Street"
						variant="filled"
						size="small"
						name="Street"
						color="secondary"
						autoComplete="street-address"
						value={state.Street}
						onChange={handleChange}
						fullWidth
					/>
				</Grid>
				<Grid item xs={6} md={4}>
					<TextField
						label="Community"
						variant="filled"
						size="small"
						color="secondary"
						name="Community"
						autoComplete="address-level1"
						value={state.Community}
						onChange={handleChange}
						fullWidth
					/>
				</Grid>
				<Grid item xs={6} md={4}>
					<TextField
						label="Province"
						variant="filled"
						size="small"
						color="secondary"
						name="Province"
						autoComplete="address-level1"
						value={state.Province}
						onChange={handleChange}
						fullWidth
					/>
				</Grid>
				<Grid item xs={6} md={4}>
					<TextField
						label="Postal Code"
						variant="filled"
						size="small"
						color="secondary"
						name="PostalCode"
						autoComplete="postal-code"
						value={state.PostalCode}
						onChange={handleChange}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						label="Country"
						variant="filled"
						size="small"
						color="secondary"
						name="Country"
						autoComplete="country-name"
						value={state.Country}
						onChange={handleChange}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<MuiPhoneNumber
						label="Telephone"
						type="tel"
						variant="filled"
						size="small"
						color="secondary"
						name="Tel_No"
						autoComplete="tel"
						defaultCountry="ca"
						value={state.Tel_No}
						onChange={handlePhoneChange}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<FormControl
						variant="filled"
						color="secondary"
						size="small"
						fullWidth
					>
						<InputLabel id="race-label">Race</InputLabel>
						<Select
							labelId="race-label"
							id="race"
							name="Race"
							value={state.Race}
							onChange={handleChange}
							label="Race"
						>
							{races.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={6} md={4}>
					<TextField
						name="DOB"
						label="Date Of Birth"
						variant="filled"
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
				<Grid item xs={6} md={4}>
					<FormControl
						variant="filled"
						color="secondary"
						size="small"
						fullWidth
					>
						<InputLabel id="age-label">Age</InputLabel>
						<Select
							labelId="age-label"
							id="age"
							name="Age"
							value={state.Age}
							onChange={handleChange}
							label="Age"
						>
							{ages.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={4}>
					<FormControl component="fieldset" color="secondary">
						<FormLabel component="legend">Gender</FormLabel>
						<RadioGroup row aria-label="gender" name="Gender" value={state.Gender} onChange={handleChange}>
							<FormControlLabel value="Male" control={<Radio />} label="Male" />
							<FormControlLabel value="Female" control={<Radio />} label="Female" />
							<FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />

						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						label="Medicare #"
						variant="filled"
						size="small"
						color="secondary"
						name="Medicare_No"
						value={state.Medicare_No}
						onChange={handleChange}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<FormControl
						variant="filled"
						color="secondary"
						size="small"
						fullWidth
					>
						<InputLabel id="medicare-origin-label">Medicare Origin</InputLabel>
						<Select
							labelId="medicare-origin-label"
							id="medicare-origin"
							name="Medicare_Origin"
							value={state.Medicare_Origin}
							onChange={handleChange}
							label="Medicare Origin"
						>
							{medicareOrigins.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						label="Hospital Chart #"
						variant="filled"
						size="small"
						color="secondary"
						name="Hospital_Chart_No"
						value={state.Hospital_Chart_No}
						onChange={handleChange}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Comments"
						variant="filled"
						size="small"
						color="secondary"
						name="P_Comments"
						value={state.P_Comments}
						onChange={handleChange}
						multiline
						rows={6}
						fullWidth
					/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default PatientDetails
