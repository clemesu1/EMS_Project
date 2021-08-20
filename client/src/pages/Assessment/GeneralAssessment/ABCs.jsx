import { FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		width: "100%",
		height: "100%",
		padding: theme.spacing(2),
		margin: 'auto',
	},
}));

const ABCs = (props) => {
	const { state, setState } = props
	const classes = useStyles();

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	return (
		<Grid container spacing={3}  justifyContent="center" alignItems="center">
			<Grid item xs={2}>
				<Typography>Airway Status</Typography>
			</Grid>

			<Grid item xs={9} >
				<Paper variant="outlined" className={classes.paper}>

					<FormControl component="fieldset" fullWidth>
						<RadioGroup row aria-label="airway-status" name="Airway_Status" value={state.Airway_Status} onChange={handleChange} >
							<FormControlLabel value="Clear" control={<Radio />} label="Clear" />
							<FormControlLabel value="Completely Obstructed" control={<Radio />} label="Completely Obstructed" />
							<FormControlLabel value="Partially Obstructed" control={<Radio />} label="Partially Obstructed" />
						</RadioGroup>
					</FormControl>
				</Paper>
			</Grid>
			<Grid item xs={1} />

			<Grid item xs={2}>
				<Typography>Breathing</Typography>
			</Grid>
			<Grid item xs={3}>
				<Paper variant="outlined" className={classes.paper}>

					<FormControl component="fieldset">
						<FormLabel color="secondary" component="legend">Effort</FormLabel>
						<RadioGroup aria-label="breath-effort" name="Breath_Effort" value={state.Breath_Effort} onChange={handleChange}>
							<FormControlLabel value="Effortless" control={<Radio />} label="Effortless" />
							<FormControlLabel value="Laboured" control={<Radio />} label="Laboured" />
						</RadioGroup>
					</FormControl>
				</Paper>
			</Grid>
			<Grid item xs={3}>
				<Paper variant="outlined" className={classes.paper}>

					<FormControl component="fieldset">
						<FormLabel color="secondary" component="legend">Rate</FormLabel>
						<RadioGroup aria-label="breath-rate" name="Breath_Rate" value={state.Breath_Rate} onChange={handleChange}>
							<FormControlLabel value="Fast" control={<Radio />} label="Fast" />
							<FormControlLabel value="Normal" control={<Radio />} label="Normal" />
							<FormControlLabel value="Slow" control={<Radio />} label="Slow" />
							<FormControlLabel value="Absent" control={<Radio />} label="Absent" />
						</RadioGroup>
					</FormControl>
				</Paper>
			</Grid>

			<Grid item xs={3}>
				<Paper variant="outlined" className={classes.paper}>

					<FormControl component="fieldset" >
						<FormLabel color="secondary" component="legend">Rhythm</FormLabel>
						<RadioGroup aria-label="breath-rhythm" name="Breath_Rhythm" value={state.Breath_Rhythm} onChange={handleChange}>
							<FormControlLabel value="Regular" control={<Radio />} label="Regular" />
							<FormControlLabel value="Irregular" control={<Radio />} label="Irregular" />
						</RadioGroup>
					</FormControl>
				</Paper>
			</Grid>
			<Grid item xs={1} />

			<Grid item xs={2}>
				<Typography>Circulation</Typography>
			</Grid>
			<Grid item container xs={9} spacing={3}>
				<Grid item xs={12}>
					<Paper variant="outlined" className={classes.paper}>

						<FormControl component="fieldset" fullWidth>
							<FormLabel color="secondary" component="legend">Site</FormLabel>
							<RadioGroup row aria-label="circul-site" name="Circul_Site" value={state.Circul_Site} onChange={handleChange} style={{ justifyContent: 'space-between' }} >
								<FormControlLabel value="Carotid" control={<Radio />} label="Carotid" />
								<FormControlLabel value="Radial" control={<Radio />} label="Radial" />
								<FormControlLabel value="Brachial" control={<Radio />} label="Brachial" />
								<FormControlLabel value="Femoral" control={<Radio />} label="Femoral" />
								<FormControlLabel value="Apical" control={<Radio />} label="Apical" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper variant="outlined" className={classes.paper}>

						<FormControl component="fieldset">
							<FormLabel color="secondary" component="legend">Rate</FormLabel>
							<RadioGroup aria-label="circul-rate" name="Circul_Rate" value={state.Circul_Rate} onChange={handleChange}>
								<FormControlLabel value="Fast" control={<Radio />} label="Fast" />
								<FormControlLabel value="Normal" control={<Radio />} label="Normal" />
								<FormControlLabel value="Slow" control={<Radio />} label="Slow" />
								<FormControlLabel value="Absent" control={<Radio />} label="Absent" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper variant="outlined" className={classes.paper}>

						<FormControl component="fieldset">
							<FormLabel color="secondary" component="legend">Volume</FormLabel>
							<RadioGroup aria-label="circul-vol" name="Circul_Vol" value={state.Circul_Vol} onChange={handleChange}>
								<FormControlLabel value="Weak" control={<Radio />} label="Weak" />
								<FormControlLabel value="Normal" control={<Radio />} label="Normal" />
								<FormControlLabel value="Bounding" control={<Radio />} label="Bounding" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper variant="outlined" className={classes.paper}>

						<FormControl component="fieldset">
							<FormLabel color="secondary" component="legend">Rhythm</FormLabel>
							<RadioGroup aria-label="circul-rhythm" name="Circul_Rhythm" value={state.Circul_Rhythm} onChange={handleChange}>
								<FormControlLabel value="Regular" control={<Radio />} label="Regular" />
								<FormControlLabel value="Irregular" control={<Radio />} label="Irregular" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
			</Grid>
			<Grid item xs={1} />

		</Grid>
	)
}

export default ABCs
