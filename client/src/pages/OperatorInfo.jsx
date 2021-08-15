import React from 'react'
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const OperatorInfo = ({ state, setState }) => {
	const classes = useStyles();

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Operator Info
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						color="secondary"
						margin="normal"
						required
						fullWidth
						id="vehicleNo"
						label="Vehicle #"
						name="Vehicle_ID"
						inputProps={{ maxLength: 7 }}
						autoFocus
						value={state.Vehicle_ID}
						onChange={handleChange}

					/>
					<TextField
						variant="outlined"
						color="secondary"
						margin="normal"
						required
						fullWidth
						id="driverID"
						label="Driver ID"
						name="Driver_ID"
						inputProps={{ maxLength: 4 }}
						value={state.Driver_ID}
						onChange={handleChange}
					/>
					<TextField
						variant="outlined"
						color="secondary"
						margin="normal"
						required
						fullWidth
						id="attendantID"
						label="Attendant ID"
						name="Attendant_ID"
						inputProps={{ maxLength: 4 }}
						value={state.Attendant_ID}
						onChange={handleChange}
					/>
					<TextField
						variant="outlined"
						color="secondary"
						margin="normal"
						required
						fullWidth
						id="assistantID"
						label="Assistant ID"
						name="Assisting_ID"
						inputProps={{ maxLength: 4 }}
						value={state.Assisting_ID}
						onChange={handleChange}
					/>
					<FormControl
						variant="outlined"
						color="secondary"
						margin="normal"
						required
						fullWidth
					>
						<InputLabel id="select-vehicle-status-label">Vehicle Status</InputLabel>
						<Select
							labelId="select-vehicle-status-label"
							id="vehicleStatus"
							label="Vehicle Status"
							name="Vehicle_Status"
							value={state.Vehicle_Status}
							onChange={handleChange}
						>
							<MenuItem value={"on-site"}>on-site</MenuItem>
							<MenuItem value={"off-site"}>off-site</MenuItem>
							<MenuItem value={"ILT"}>ILT</MenuItem>
						</Select>
					</FormControl>

					<Grid container spacing={3}>
						<Grid item xs={6}>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="secondary"
								className={classes.submit}
								component={Link}
								to="/call-details/vehicle-details"
							>
								Submit
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="secondary"
								className={classes.submit}
							>
								Cancel
							</Button>
						</Grid>
					</Grid>



				</form>
			</div>


		</Container>
	)
}

export default OperatorInfo
