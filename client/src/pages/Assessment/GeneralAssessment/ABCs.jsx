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

			<Grid item xs={10} >
				<Paper variant="outlined" className={classes.paper}>

					<FormControl component="fieldset" fullWidth>
						<RadioGroup row aria-label="airway-status" name="Airway_Status" value={state.Airway_Status} onChange={handleChange} >
							<FormControlLabel value="clear" control={<Radio />} label="Clear" />
							<FormControlLabel value="completely-obstructed" control={<Radio />} label="Completely Obstructed" />
							<FormControlLabel value="partially-obstructed" control={<Radio />} label="Partially Obstructed" />
						</RadioGroup>
					</FormControl>
				</Paper>
			</Grid>
			<Grid item xs={2}>
				<Typography>Breathing</Typography>
			</Grid>
			<Grid item xs={3}>
				<Paper variant="outlined" className={classes.paper}>

					<FormControl component="fieldset">
						<FormLabel color="secondary" component="legend">Effort</FormLabel>
						<RadioGroup aria-label="breath-effort" name="Breath_Effort" value={state.Breath_Effort} onChange={handleChange}>
							<FormControlLabel value="effortless" control={<Radio />} label="Effortless" />
							<FormControlLabel value="laboured" control={<Radio />} label="Laboured" />
						</RadioGroup>
					</FormControl>
				</Paper>
			</Grid>
			<Grid item xs={3}>
				<Paper variant="outlined" className={classes.paper}>

					<FormControl component="fieldset">
						<FormLabel color="secondary" component="legend">Rate</FormLabel>
						<RadioGroup aria-label="breath-rate" name="Breath_Rate" value={state.Breath_Rate} onChange={handleChange}>
							<FormControlLabel value="fast" control={<Radio />} label="Fast" />
							<FormControlLabel value="normal" control={<Radio />} label="Normal" />
							<FormControlLabel value="slow" control={<Radio />} label="Slow" />
							<FormControlLabel value="absent" control={<Radio />} label="Absent" />
						</RadioGroup>
					</FormControl>
				</Paper>
			</Grid>
			<Grid item xs={3}>
				<Paper variant="outlined" className={classes.paper}>

					<FormControl component="fieldset" >
						<FormLabel color="secondary" component="legend">Rhythm</FormLabel>
						<RadioGroup aria-label="breath-rhythm" name="Breath_Rhythm" value={state.Breath_Rhythm} onChange={handleChange}>
							<FormControlLabel value="regular" control={<Radio />} label="Regular" />
							<FormControlLabel value="irregular" control={<Radio />} label="Irregular" />
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
								<FormControlLabel value="carotid" control={<Radio />} label="Carotid" />
								<FormControlLabel value="radial" control={<Radio />} label="Radial" />
								<FormControlLabel value="brachial" control={<Radio />} label="Brachial" />
								<FormControlLabel value="femoral" control={<Radio />} label="Femoral" />
								<FormControlLabel value="apical" control={<Radio />} label="Apical" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper variant="outlined" className={classes.paper}>

						<FormControl component="fieldset">
							<FormLabel color="secondary" component="legend">Rate</FormLabel>
							<RadioGroup aria-label="circul-rate" name="Circul_Rate" value={state.Circul_Rate} onChange={handleChange}>
								<FormControlLabel value="fast" control={<Radio />} label="Fast" />
								<FormControlLabel value="normal" control={<Radio />} label="Normal" />
								<FormControlLabel value="slow" control={<Radio />} label="Slow" />
								<FormControlLabel value="absent" control={<Radio />} label="Absent" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper variant="outlined" className={classes.paper}>

						<FormControl component="fieldset">
							<FormLabel color="secondary" component="legend">Volume</FormLabel>
							<RadioGroup aria-label="circul-vol" name="Circul_Vol" value={state.Circul_Vol} onChange={handleChange}>
								<FormControlLabel value="weak" control={<Radio />} label="Weak" />
								<FormControlLabel value="normal" control={<Radio />} label="Normal" />
								<FormControlLabel value="bounding" control={<Radio />} label="Bounding" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper variant="outlined" className={classes.paper}>

						<FormControl component="fieldset">
							<FormLabel color="secondary" component="legend">Rhythm</FormLabel>
							<RadioGroup aria-label="circul-rhythm" name="Circul_Rhythm" value={state.Circul_Rhythm} onChange={handleChange}>
								<FormControlLabel value="regular" control={<Radio />} label="Regular" />
								<FormControlLabel value="irregular" control={<Radio />} label="Irregular" />
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
