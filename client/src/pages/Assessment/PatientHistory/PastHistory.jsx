import { Box, Checkbox, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const historyList = ["Alcoholism", "Angina", "Asthma", "Back Injury", "Bi Polar", "Bronchitis", "CABG (Coronary Artery Bypass Graft)", "CHF (Congestive Heart Failure)", "COPD (Chronic Obstructive Pulmonary Disease)", "Depression", "Drug Dependency", "Emphysema", "Epilepsy", "Hip Replacement", "HTN (Hypertension)", "Hypoglycemia", "IDDM (Insulin Dependent Diabetic)", "Manic Depressive", "Myocardial Infarction", "NIDDM (None Insulin Dependent Diabetic)", "Schizophrenia", "Seizures", "Stroke", "Thyroid", "Transient Ischemic Attack (TIA)"];

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	text: {
		textAlign: 'center',
	},
	listbox: {
		width: '100%',
		maxHeight: '29rem',
		overflow: 'auto',
		backgroundColor: theme.palette.background.paper,
	},
}));

const PastHistory = ({ state, setState, checked, setChecked }) => {
	const classes = useStyles();

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
		setState({
			...state,
			PH_History: newChecked,
		})
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={6}>
					<Typography variant="subtitle1" component="div" className={classes.text}>
						<Box fontWeight="fontWeightMedium">
							History
						</Box>
					</Typography>
					<List className={classes.listbox}>
						{
							historyList.map((value, index) => {
								const labelId = `checkbox-list-label-${value}`;

								return (
									<ListItem key={index} role={undefined} dense button onClick={handleToggle(value)}>
										<ListItemIcon>
											<Checkbox
												edge="start"
												checked={checked.indexOf(value) !== -1}
												tabIndex={-1}
												disableRipple
												inputProps={{ 'aria-labelledby': labelId }}
											/>
										</ListItemIcon>
										<ListItemText id={labelId} primary={value} />
									</ListItem>
								);
							})
						}
					</List>


				</Grid>
				<Grid item xs={6}>
					<Typography variant="subtitle1" component="div" className={classes.text}>
						<Box fontWeight="fontWeightMedium">
							Others / Comments
						</Box>
					</Typography>

					<TextField
						multiline
						fullWidth
						rows={22}
						margin="normal"
						variant="outlined"
						color="secondary"
						name="PH_Comment"
						value={state.PH_Comment}
						onChange={handleChange}
					/>

				</Grid>
			</Grid>
		</div >
	)

}




export default PastHistory
