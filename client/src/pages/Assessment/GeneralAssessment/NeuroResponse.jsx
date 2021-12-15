import React from 'react'
import { Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../features/neuroResponse';

const useStyles = makeStyles((theme) => ({
	paper: {
		width: "100%",
		height: "100%",
		padding: theme.spacing(2),
		margin: 'auto',
	},
	formControl: {
		minWidth: 150,
	},
	checkBoxFormControl: {
		margin: theme.spacing(3),
	},
}));

const consciousnessLevels = ["Alert", "Altered", "Verbal", "Pain", "Unresponsive"];
const eyeSizes = ["2 mm", "3 mm", "4 mm", "5 mm", "6 mm", "7 mm", "8 mm", "9 mm"];
const eyeReactivity = ["Yes", "No", "Abnormal", "Sluggish", "Not assessed"];
const sensoryList = ["Absent", "Present"];
const motorList = ["Normal", "Weak", "Absent"];

const NeuroResponse = (props) => {

	const { status, setStatus } = props;
	const classes = useStyles();
	const dispatch = useDispatch();
	const neuroResponse = useSelector((state) => state.neuroResponse.value)

	const handleChange = (e) => {
		dispatch(store({
			...neuroResponse,
			[e.target.name]: e.target.value,
		}))
	}

	const handleCheckboxChange = (e) => {
		const newData = [...status];

		const index = newData.findIndex(item => item.value === e.target.name)

		newData[index].checked = e.target.checked;

		setStatus(newData)

		const dataList = status.filter(obj => obj.checked === true).map(obj => obj.label)


		dispatch(store({
			...neuroResponse,
			Status: dataList
		}))

	}

	return (
		<Container maxWidth="xl">

			<Grid container spacing={3} justifyContent="center">
				<Grid item container xs={12} lg={8} spacing={3} alignItems="center">

					<Grid item xs={12} md={6}>
						<FormControl
							variant="filled"
							color="secondary"
							size="small"
							fullWidth
						>
							<InputLabel id="loc-label">Level of Consciousness</InputLabel>
							<Select
								labelId="loc-label"
								id="loc"
								name="LOC"
								value={neuroResponse.LOC}
								onChange={handleChange}
								label="Level of Consciousness"
							>
								{consciousnessLevels.map((value, index) => (
									<MenuItem key={index} value={value}>{value}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={6}>
						<FormControl component="fieldset" className={classes.formControl} >
							<FormGroup row>
								{status.map((item, index) => (
									<FormControlLabel
										key={index}
										label={item.label}
										control={
											<Checkbox
												key={index}
												checked={item.checked || false}
												value={item.value}
												onChange={(e) => handleCheckboxChange(e)}
												name={item.value}
											/>
										}
									/>
								))}
							</FormGroup>
						</FormControl>
					</Grid>

					<Grid item container xs={12} sm={6} spacing={2} >
						<Paper variant="outlined" className={classes.paper}>
							<Typography
								color="textSecondary"
								gutterBottom
							>
								Left Eye
							</Typography>
							<Grid item container xs={12} spacing={2}>
								<Grid item xs={12}>
									<FormControl
										variant="filled"
										color="secondary"
										size="small"
										fullWidth
									>
										<InputLabel id="l-eye-size-label">Size</InputLabel>
										<Select
											labelId="l-eye-size-label"
											id="l-eye-size"
											name="L_Eye_Size"
											value={neuroResponse.L_Eye_Size}
											onChange={handleChange}
											label="Size"
										>
											{eyeSizes.map((value, index) => (
												<MenuItem key={index} value={value}>{value}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12}>
									<FormControl
										variant="filled"
										color="secondary"
										size="small"
										fullWidth
									>
										<InputLabel id="l-eye-react-label">Reactivity</InputLabel>
										<Select
											labelId="l-eye-react-label"
											id="l-eye-react"
											name="L_Eye_React"
											value={neuroResponse.L_Eye_React}
											onChange={handleChange}
											label="Reactivity"
										>
											{eyeReactivity.map((value, index) => (
												<MenuItem key={index} value={value}>{value}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item container xs={12} sm={6} spacing={2} >
						<Paper variant="outlined" className={classes.paper}>
							<Typography
								color="textSecondary"
								gutterBottom
							>
								Right Eye
							</Typography>
							<Grid item container xs={12} spacing={2}>
								<Grid item xs={12}>
									<FormControl
										variant="filled"
										color="secondary"
										size="small"
										fullWidth
									>
										<InputLabel id="r-eye-size-label">Size</InputLabel>
										<Select
											labelId="r-eye-size-label"
											id="r-eye-size"
											name="R_Eye_Size"
											value={neuroResponse.R_Eye_Size}
											onChange={handleChange}
											label="Size"
										>
											{eyeSizes.map((value, index) => (
												<MenuItem key={index} value={value}>{value}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12} >
									<FormControl
										variant="filled"
										color="secondary"
										size="small"
										fullWidth
									>
										<InputLabel id="r-eye-react-label">Reactivity</InputLabel>
										<Select
											labelId="r-eye-react-label"
											id="r-eye-react"
											name="R_Eye_React"
											value={neuroResponse.R_Eye_React}
											onChange={handleChange}
											label="Reactivity"
										>
											{eyeReactivity.map((value, index) => (
												<MenuItem key={index} value={value}>{value}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>

				<Grid item container xs={12} lg={4} spacing={3}>
					<Grid item container xs={12} spacing={2}>
						<Paper variant="outlined" className={classes.paper}>
							<Typography
								color="textSecondary"
								gutterBottom
							>
								Sensory
							</Typography>
							<Grid item xs={12}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
									margin="normal"
									className={classes.formControl}
								>
									<InputLabel id="sense-ur-select-label">Upper Right</InputLabel>
									<Select
										labelId="sense-ur-select-label"
										id="sense-ur-select"
										label="Upper Right"
										name="Sense_UR"
										value={neuroResponse.Sense_UR}
										onChange={handleChange}
									>
										{sensoryList.map((value, index) => (
											<MenuItem key={index} value={value}>{value}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
									margin="normal"
									className={classes.formControl}
								>
									<InputLabel id="sense-ul-select-label">Upper Left</InputLabel>
									<Select
										labelId="sense-ul-select-label"
										id="sense-ul-select"
										label="Upper Left"
										name="Sense_UL"
										value={neuroResponse.Sense_UL}
										onChange={handleChange}
									>
										{sensoryList.map((value, index) => (
											<MenuItem key={index} value={value}>{value}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
									margin="normal"
									className={classes.formControl}
								>
									<InputLabel id="sense-lr-select-label">Lower Right</InputLabel>
									<Select
										labelId="sense-lr-select-label"
										id="sense-lr-select"
										label="Lower Right"
										name="Sense_LR"
										value={neuroResponse.Sense_LR}
										onChange={handleChange}
									>
										{sensoryList.map((value, index) => (
											<MenuItem key={index} value={value}>{value}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
									margin="normal"
									className={classes.formControl}
								>
									<InputLabel id="sense-ll-select-label">Lower Left</InputLabel>
									<Select
										labelId="sense-ll-select-label"
										id="sense-ll-select"
										label="Lower Left"
										name="Sense_LL"
										value={neuroResponse.Sense_LL}
										onChange={handleChange}
									>
										{sensoryList.map((value, index) => (
											<MenuItem key={index} value={value}>{value}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Paper>
					</Grid>
					<Grid item container xs={12} spacing={2}>
						<Paper variant="outlined" className={classes.paper}>
							<Typography
								color="textSecondary"
								gutterBottom
							>
								Motor
							</Typography>
							<Grid item xs={12}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
									margin="normal"
									className={classes.formControl}
								>
									<InputLabel id="motor-ur-select-label">Upper Right</InputLabel>
									<Select
										labelId="motor-ur-select-label"
										id="motor-ur-select"
										label="Upper Right"
										name="Motor_UR"
										value={neuroResponse.Motor_UR}
										onChange={handleChange}
									>
										{motorList.map((value, index) => (
											<MenuItem key={index} value={value}>{value}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
									margin="normal"
									className={classes.formControl}
								>
									<InputLabel id="motor-ul-select-label">Upper Left</InputLabel>
									<Select
										labelId="motor-ul-select-label"
										id="motor-ul-select"
										label="Upper Left"
										name="Motor_UL"
										value={neuroResponse.Motor_UL}
										onChange={handleChange}
									>
										{motorList.map((value, index) => (
											<MenuItem key={index} value={value}>{value}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
									margin="normal"
									className={classes.formControl}
								>
									<InputLabel id="motor-lr-select-label">Lower Right</InputLabel>
									<Select
										labelId="motor-lr-select-label"
										id="motor-lr-select"
										label="Lower Right"
										name="Motor_LR"
										value={neuroResponse.Motor_LR}
										onChange={handleChange}
									>
										{motorList.map((value, index) => (
											<MenuItem key={index} value={value}>{value}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
									margin="normal"
									className={classes.formControl}
								>
									<InputLabel id="motor-ll-select-label">Lower Left</InputLabel>
									<Select
										labelId="motor-ll-select-label"
										id="motor-ll-select"
										label="Lower Left"
										name="Motor_LL"
										value={neuroResponse.Motor_LL}
										onChange={handleChange}
									>
										{motorList.map((value, index) => (
											<MenuItem key={index} value={value}>{value}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default NeuroResponse
