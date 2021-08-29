import { Box, Grid, List, ListItem, ListItemIcon, Checkbox, ListItemText, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	listbox: {
		width: '100%',
		maxHeight: '29rem',
		overflow: 'auto',
		backgroundColor: theme.palette.background.paper,
	},
}));

const drugList = ["ASA", "Cephalosporines (Keflex, Cefzil, Ceftin, Suprax, Vantin)", "Codeine", "Demerol", "Morphine", "Nitro", "Penicillin", "Sulpha drugs"];
const environmentalList = ["Almonds", "Cashews", "Eggs", "Fish", "Hazelnuts", "Latex", "Milk", "Other Nuts", "Peanuts", "Sesame seeds", "Shellfish", "Soy", "Walnuts", "Wheat"];

const Allergies = ({ state, setState, checkedDrug, setCheckedDrug, checkedEnv, setCheckedEnv }) => {
	const classes = useStyles();

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	const handleDrugToggle = (value) => () => {
		const currentIndex = checkedDrug.indexOf(value);
		const newChecked = [...checkedDrug];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setCheckedDrug(newChecked);

		setState({
			...state,
			Alr_Drugs: newChecked,
		})
	};

	const handleEnvToggle = (value) => () => {
		const currentIndex = checkedEnv.indexOf(value);
		const newChecked = [...checkedEnv];

		console.log(currentIndex)

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setCheckedEnv(newChecked);

		setState({
			...state,
			Alr_Env: newChecked,
		})
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3} alignItems="flex-start">
				<Grid item container xs={12} md={8} direction="column">
					<Typography variant="subtitle1" component="div">
						<Box fontWeight="fontWeightMedium">
							Allergies (select all that are applicable)
						</Box>
					</Typography>

					<Grid item container xs={12} spacing={3} alignItems="flex-start">
						<Grid item container xs={12} md={6}>
							<Grid item xs={12}>
								<Typography variant="subtitle2" component="div">
									Drugs
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<List className={classes.listbox}>
									{
										drugList.map((value, index) => {
											const labelId = `checkbox-list-label-${value}`;

											return (
												<ListItem key={index} role={undefined} dense button onClick={handleDrugToggle(value)}>
													<ListItemIcon>
														<Checkbox
															edge="start"
															checked={checkedDrug.indexOf(value) !== -1}
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
						</Grid>

						<Grid item container xs={12} md={6} >
							<Grid item xs={12}>
								<Typography variant="subtitle2" component="div">
									Environmental
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<List className={classes.listbox}>
									{
										environmentalList.map((value, index) => {
											const labelId = `checkbox-list-label-${value}`;

											return (
												<ListItem key={index} role={undefined} dense button onClick={handleEnvToggle(value)}>
													<ListItemIcon>
														<Checkbox
															edge="start"
															checked={checkedEnv.indexOf(value) !== -1}
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
						</Grid>
					</Grid>

				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						label="Others"
						fullWidth
						variant="outlined"
						color="secondary"
						multiline
						rows={18}
						name="Alr_Others"
						value={state.Alr_Others}
						onChange={handleChange}
					/>
				</Grid>
			</Grid>
		</div>
	)
}

export default Allergies
