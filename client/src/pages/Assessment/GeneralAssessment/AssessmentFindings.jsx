import React from 'react'
import { Grid, Typography, TextField, FormControlLabel, Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { FixedSizeList } from 'react-window';

const assessmentFindingsList = ["Abnormal Motor Function", "Abnormal Pulses", "Abnormal Sensation", "Abrasion", "Accessory Muscle Use", "Amputation", "Arterial Bleeding", "Bleeding Controlled", "Breath Sounds Decreased On Left", "Breath Sounds Decreased On Right", "Burn", "Coughing Non-Productive", "Coughing Productive", "Crackles/Rales", "Crowning", "Crush", "Deceased Sound", "Deformity", "Discoloration", "Dislocation Fracture", "Distention", "Drainage", "Edema", "Erythema", "Flail Segment", "Guarding", "Gunshot", "JVD", "Laceration", "Lesion", "Mass", "Murmur", "Normal", "Not Assessed", "Other", "Pain", "Pain On Movement", "Paralysis", "Puncture/Stab", "SQ Air", "Stridor", "Tender Para-Spinous", "Tender Spines Process", "Tenderness", "Tracheal Deviation", "Unstable", "Unstable Pelvis", "Venous Bleeding", "Vomiting", "Weakness", "Wheezing"];
const bodyAreaAssessedList = ["Abdomen (Left Lower Quadrant)", "Abdomen (Left Upper Quadrant)", "Abdomen (Right Lower Quadrant)", "Abdomen (Right Upper Quadrant)", "Arm (Left)", "Arm (Right)", "Back (Cervical)", "Back (Lumbar/Sacral)", "Back (Thoracic)", "Breast (Left)", "Breast (Right)", "Chest (Breath Sounds)", "Chest (Heart)", "Chest (Physical Exam)", "Ear (Left)", "Ear (Right)", "Eye (Left)", "Eye (Right)", "Foot (Left)", "Foot (Right)", "Genitalia", "Hand (Left)", "Hand (Right)", "Head", "Leg (Left)", "Leg (Right)", "Neck (Anterior)", "No Physical Exam", "Other", "Pelvic Area", "Scalp", "Vaginal"];

const AssessmentFindings = (props) => {

	const { state, setState, assessmentItems } = props;

	const { assessChecked, setAssessChecked, bodyChecked, setBodyChecked } = assessmentItems;

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	const handleAssessToggle = (value) => () => {
		const currentIndex = assessChecked.indexOf(value);
		const newChecked = [...assessChecked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setAssessChecked(newChecked);

		setState({
			...state,
			Assess_Find: newChecked,
		})
	};

	const handleBodyToggle = (value) => () => {
		const currentIndex = bodyChecked.indexOf(value);
		const newChecked = [...bodyChecked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setBodyChecked(newChecked);

		setState({
			...state,
			Body_Area_Find: newChecked,
		})
	};

	return (
		<Grid container spacing={3}>
			<Grid item container xs={6} justifyContent="center">
				<Grid item>
					<Typography variant="h6">Assessment Finding</Typography>
				</Grid>
				<Grid item container xs={12} justifyContent="center">
					<FixedSizeList height={450} width={600} itemSize={46} itemCount={assessmentFindingsList.length}>
						{renderAssessRow}
					</FixedSizeList>
				</Grid>
			</Grid>
			<Grid item container xs={6} justifyContent="center">
				<Grid item>
					<Typography variant="h6">Body Area Assessed</Typography>
				</Grid>
				<Grid item container xs={12} justifyContent="center">
					<FixedSizeList height={450} width={600} itemSize={46} itemCount={bodyAreaAssessedList.length}>
						{renderBodyRow}
					</FixedSizeList>
				</Grid>
			</Grid>
			<Grid item container xs={12}>
				<Grid item xs={1}>
					<FormControlLabel control={
						<Checkbox />}
						label="Other"
					/>
				</Grid>
				<Grid item xs={11}>
					<TextField
						variant="outlined"
						color="secondary"
						size="small"
						name="Find_Other"
						value={state.Find_Other}
						onChange={handleChange}
						fullWidth
					/>
				</Grid>
			</Grid>
		</Grid>
	)

	function renderAssessRow(props) {
		const { index, style } = props;
		const value = assessmentFindingsList[index]
		return (
			<ListItem
				style={style}
				key={index}
				role={undefined}
				dense
				button
				onClick={handleAssessToggle(value)}
			>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={assessChecked.indexOf(value) !== -1}
						tabIndex={-1}
						disableRipple
					/>
				</ListItemIcon>
				<ListItemText primary={value} />
			</ListItem>
		)
	}

	function renderBodyRow(props) {
		const { index, style } = props;
		const value = bodyAreaAssessedList[index]
		return (
			<ListItem
				style={style}
				key={index}
				role={undefined}
				dense
				button
				onClick={handleBodyToggle(value)}
			>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={bodyChecked.indexOf(value) !== -1}
						tabIndex={-1}
						disableRipple
					/>
				</ListItemIcon>
				<ListItemText primary={value} />
			</ListItem>
		)
	}

}

export default AssessmentFindings
