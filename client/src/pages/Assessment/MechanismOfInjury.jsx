import { TextField, Box, Card, CardContent, CardHeader, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../features/mechanismInjury';

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 240,
	},
	cardHeader: {
		color: "white",
		backgroundColor: "navy",
	}
}));

const injuryCauses = ["Aircraft related accident", "Assault", "Bicycle accident", "Bites", "Drowning / near-drowning", "Electrocution (non-lightning)", "Excessive cold", "Excessive heat", "Fall < 2 meters", "Fall > 2 meters", "Fire and flames", "Firearm injury", "Lightning", "Machinery accidents", "Mechanical suffocation", "Motor vehicle non-traffic accident", "Motor vehicle traffic accident", "Other", "Pedestrian traffic accident", "Sexual assault", "Smoke inhalation", "Stabbing", "Water transport accident"];
const humanFactors = ["Accidental", "Intentional (self-inflicted)", "Other", "Unknown"];
const injuryNatures = ["Blunt trauma", "Burn trauma", "Other", "Penetrating trauma"];
const equipmentList = ["Airbag deployed", "Child safety seat", "Eye protection", "Harness", "Helmet", "Lap Belt", "Personal floatation device", "Protective clothing / Gear", "Shoulder belt", "Unknown", "None", "Other"];

const MechanismOfInjury = ({ assessmentItems }) => {

	return (
		<Box p={3}>
			<Container>
				<MechanismTab />
			</Container>
		</Box>
	)
}

const MechanismTab = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const mechanismInjury = useSelector((state) => state.mechanismInjury.value)

	const handleChange = (e) => {
		dispatch(store({
			...mechanismInjury,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Card variant="outlined" style={{ maxWidth: 275 }}>
					<CardHeader title="Work Related" />
					<CardContent>
						<FormControl component="fieldset" color="secondary">
							<RadioGroup
								row
								aria-label="work related"
								name="Work_related"
								value={mechanismInjury.Work_related}
								onChange={handleChange}
							>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
					</CardContent>
				</Card>
			</Grid>
			<Grid item container xs={12} sm={12} spacing={2}>
				<Grid item xs={12} sm={6}>
					<FormControl
						className={classes.formControl}
						variant="filled"
						color="secondary"
						fullWidth
					>
						<InputLabel id="cause-of-injury-label">Cause of Injury</InputLabel>
						<Select
							labelId="cause-of-injury-label"
							id="cause-of-injury"
							name="Cause_of_Injury"
							value={mechanismInjury.Cause_of_Injury}
							onChange={handleChange}
							label="Cause of Injury"
						>
							{injuryCauses.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					{mechanismInjury.Cause_of_Injury !== "Other" ? '' : (
						<TextField
							variant="filled"
							color="secondary"
							id="cause-of-injury-other"
							name="COI_Other"
							value={mechanismInjury.COI_Other}
							onChange={handleChange}
							label="Other"
							fullWidth
						/>
					)}
				</Grid>
			</Grid>
			<Grid item container xs={12} sm={12} spacing={2}>
				<Grid item xs={12} sm={6}>
					<FormControl
						className={classes.formControl}
						variant="filled"
						color="secondary"
						fullWidth
					>
						<InputLabel id="human-factor-label">Human Factor</InputLabel>
						<Select
							labelId="human-factor-label"
							id="human-factor"
							name="Human_Factor"
							value={mechanismInjury.Human_Factor}
							onChange={handleChange}
							label="Human Factor"
						>
							{humanFactors.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					{mechanismInjury.Human_Factor !== "Other" ? '' : (
						<TextField
							variant="filled"
							color="secondary"
							id="human-factor-other"
							name="HF_Other"
							value={mechanismInjury.HF_Other}
							onChange={handleChange}
							label="Other"
							fullWidth
						/>
					)}
				</Grid>
			</Grid>
			<Grid item container xs={12} sm={12} spacing={2}>
				<Grid item xs={12} sm={6}>
					<FormControl
						className={classes.formControl}
						variant="filled"
						color="secondary"
						fullWidth
					>
						<InputLabel id="nature-of-injury-label">Nature of Resulting Injury</InputLabel>
						<Select
							labelId="nature-of-injury-label"
							id="nature-of-injury"
							name="Nature_of_Injury"
							value={mechanismInjury.Nature_of_Injury}
							onChange={handleChange}
							label="Nature of Resulting Injury"
						>
							{injuryNatures.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					{mechanismInjury.Nature_of_Injury !== "Other" ? '' : (
						<TextField
							variant="filled"
							color="secondary"
							id="nature-of-injury-other"
							name="NOI_Other"
							value={mechanismInjury.NOI_Other}
							onChange={handleChange}
							label="Other"
							fullWidth
						/>
					)}
				</Grid>
			</Grid>
			<Grid item container xs={12} sm={12} spacing={2}>
				<Grid item xs={12} sm={6}>
					<FormControl
						className={classes.formControl}
						variant="filled"
						color="secondary"
						fullWidth
					>
						<InputLabel id="safety-protect-equip-label">Safety/Protective Equipment</InputLabel>
						<Select
							labelId="safety-protect-equip-label"
							id="safety-protect-equip"
							name="Safety_Protect_Equip"
							value={mechanismInjury.Safety_Protect_Equip}
							onChange={handleChange}
							label="Safety/Protective Equipment"
						>
							{equipmentList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					{mechanismInjury.Safety_Protect_Equip !== "Other" ? '' : (
						<TextField
							variant="filled"
							color="secondary"
							id="safety-protect-equip-other"
							name="SPE_Other"
							value={mechanismInjury.SPE_Other}
							onChange={handleChange}
							label="Other"
							fullWidth
						/>
					)}
				</Grid>
				<Grid item xs={12} sm={9}>
					<TextField
						variant="outlined"
						color="secondary"
						id="comments"
						name="Comments"
						value={mechanismInjury.Comments}
						onChange={handleChange}
						label="Comments"
						multiline
						rows={6}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Card variant="outlined" style={{ maxWidth: 275 }}>
						<CardHeader title="M.V.C." className={classes.cardHeader} />
						<CardContent>
	
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	)
}


export default MechanismOfInjury
