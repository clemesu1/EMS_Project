import { Box, Checkbox, Grid, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../features/patientHistory';

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

const PastHistory = ({ checked, setChecked }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const patientHistory = useSelector((state) => state.patientHistory.value)

	const handleChange = (e) => {
		dispatch(store({
			...patientHistory,
			[e.target.name]: e.target.value,
		}))
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
		dispatch(store({
			...patientHistory,
			PH_History: newChecked,
		}))
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} md={6}>
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
				<Grid item xs={12} md={6}>
					<TextField
						label="Others / Comments"
						multiline
						fullWidth
						rows={22}
						margin="normal"
						variant="outlined"
						color="secondary"
						name="PH_Comment"
						value={patientHistory.PH_Comment}
						onChange={handleChange}
					/>

				</Grid>
			</Grid>
		</div >
	)

}




export default PastHistory
