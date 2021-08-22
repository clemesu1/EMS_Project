import React, { useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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

	const { state, setState, status, setStatus } = props;
	const classes = useStyles();

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	const handleCheckboxChange = (e) => {
		const newData = [...status];

		const index = newData.findIndex(item => item.value === e.target.name)

		newData[index].checked = e.target.checked;

		setStatus(newData)

		const dataList = status.filter(obj => obj.checked === true).map(obj => obj.label)

		setState({
			...state,
			Status: dataList
		})

	}

	return (
		<Grid container spacing={3}>
			<Grid item container xs={12} spacing={2}>

				{/* Level Of Consciousness */}
				<Grid item container xs={8} spacing={2} justifyContent="center">
					<Grid item container xs={4} direction="column" alignItems="center">
						<Grid item xs container justifyContent="center" alignItems="flex-end">
							<Typography>
								Level of Consciousness
							</Typography>
						</Grid>
						<Grid item xs>
							<FormControl
								variant="outlined"
								color="secondary"
								size="small"
								fullWidth
								margin="normal"
								className={classes.formControl}
							>
								<Select
									name="LOC"
									value={state.LOC}
									onChange={handleChange}
								>
									{consciousnessLevels.map((value, index) => (
										<MenuItem key={index} value={value}>{value}</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
					</Grid>
					<Grid item container xs={8} alignItems="center">
						<Grid item xs>
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
					</Grid>
				</Grid>

				{/* Sensory */}
				<Grid item container xs={4} >
					<Paper variant="outlined" className={classes.paper}>
						<Grid item container xs={12} justifyContent="center" alignItems="center">
							<Grid item>
								<Typography variant="h6">
									Sensory
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<FormControl
									variant="outlined"
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
										value={state.Sense_UR}
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
									variant="outlined"
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
										value={state.Sense_UL}
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
									variant="outlined"
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
										value={state.Sense_LR}
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
									variant="outlined"
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
										value={state.Sense_LL}
										onChange={handleChange}
									>
										{sensoryList.map((value, index) => (
											<MenuItem key={index} value={value}>{value}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</Paper>
				</Grid>

				{/* Left Eye */}
				<Grid item container xs={4}>
					<Paper variant="outlined" className={classes.paper}>
						<Grid item container xs={12} justifyContent="center" alignItems="center">
							<Typography variant="h6">
								Left Eye
							</Typography>
							<Grid item container xs={12} spacing={2} direction="column">
								<Grid item container xs direction="column" alignItems="center">
									<Typography variant="subtitle1">
										Size
									</Typography>
									<FormControl
										variant="outlined"
										color="secondary"
										size="small"
										fullWidth
										margin="normal"
										className={classes.formControl}
									>
										<Select
											name="L_Eye_Size"
											value={state.L_Eye_Size}
											onChange={handleChange}
										>
											{eyeSizes.map((value, index) => (
												<MenuItem key={index} value={value}>{value}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item container xs direction="column" alignItems="center">
									<Typography variant="subtitle1">
										Reactivity
									</Typography>
									<FormControl
										variant="outlined"
										color="secondary"
										size="small"
										fullWidth
										margin="normal"
										className={classes.formControl}
									>
										<Select
											name="L_Eye_React"
											value={state.L_Eye_React}
											onChange={handleChange}
										>
											{eyeReactivity.map((value, index) => (
												<MenuItem key={index} value={value}>{value}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>

				{/* Right Eye */}
				<Grid item container xs={4}>
					<Paper variant="outlined" className={classes.paper}>
						<Grid item container xs={12} justifyContent="center" alignItems="center">
							<Grid item>
								<Typography variant="h6">
									Right Eye
								</Typography>
							</Grid>
							<Grid item container xs={12} spacing={2} direction="column">
								<Grid item container xs direction="column" alignItems="center">
									<Typography variant="subtitle1">
										Size
									</Typography>
									<FormControl
										variant="outlined"
										color="secondary"
										size="small"
										fullWidth
										margin="normal"
										className={classes.formControl}
									>
										<Select
											name="R_Eye_Size"
											value={state.R_Eye_Size}
											onChange={handleChange}
										>
											{eyeSizes.map((value, index) => (
												<MenuItem key={index} value={value}>{value}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item container xs direction="column" alignItems="center">
									<Typography variant="subtitle1">
										Reactivity
									</Typography>
									<FormControl
										variant="outlined"
										color="secondary"
										size="small"
										fullWidth
										margin="normal"
										className={classes.formControl}
									>
										<Select
											name="R_Eye_React"
											value={state.R_Eye_React}
											onChange={handleChange}
										>
											{eyeReactivity.map((value, index) => (
												<MenuItem key={index} value={value}>{value}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>


				{/* Motor */}
				<Grid item container xs={4}>
					<Paper variant="outlined" className={classes.paper}>
						<Grid item container xs={12} justifyContent="center" alignItems="center">
							<Grid item>
								<Typography variant="h6">
									Motor
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<FormControl
									variant="outlined"
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
										value={state.Motor_UR}
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
									variant="outlined"
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
										value={state.Motor_UL}
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
									variant="outlined"
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
										value={state.Motor_LR}
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
									variant="outlined"
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
										value={state.Motor_LL}
										onChange={handleChange}
									>
										{motorList.map((value, index) => (
											<MenuItem key={index} value={value}>{value}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</Paper>
				</Grid>

			</Grid>
		</Grid>
	)
}

export default NeuroResponse
