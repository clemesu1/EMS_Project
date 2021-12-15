import { Button, ButtonGroup, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { saveVehicleDetails } from '../../features/vehicleDetails';

const useStyles = makeStyles((theme) => ({
	root: {
		'&$disabled': {
			color: theme.palette.type === 'dark' ? '#FFF' : '#000',
		},
	},
	disabled: {},
	paper: {
		padding: theme.spacing(2),
		width: '100%',
	},
}));

const crewTypes = ["EMT-1", "EMT-2", "EMT-3", "EMR", "PCP", "ACP", "CCP", "RT", "RN", "MD", "Student", "Other"];

const VehicleDetails = () => {
	const classes = useStyles();

	const dispatch = useDispatch();
	const vehicleDetails = useSelector((state) => state.vehicleDetails.value)

	const handleIncrement = () => {
		dispatch(saveVehicleDetails({
			...vehicleDetails,
			No_Transported: vehicleDetails.No_Transported + 1,
		}));
	}

	const handleDecrement = () => {
		dispatch(saveVehicleDetails({
			...vehicleDetails,
			No_Transported: vehicleDetails.No_Transported - 1,
		}));
	}

	const handleChange = (e) => {
		dispatch(saveVehicleDetails({
			...vehicleDetails,
			[e.target.name]: e.target.value,
		}));
	}

	return (
		<Container maxWidth="xl">
			<Grid container spacing={3}>
				<Grid item container xs={12} spacing={4} alignItems="center">
					<Grid item>
						<Typography variant="subtitle1" gutterBottom>Number of Patient(s) Transported</Typography>
					</Grid>
					<Grid item>
						<ButtonGroup
							orientation="vertical"
							aria-label="number of patient(s) transported"
						>
							<Button variant="contained" onClick={handleIncrement}>+</Button>
							<Button disabled classes={{
								root: classes.root, // class name, e.g. `root-x`
								disabled: classes.disabled, // class name, e.g. `disabled-x`
							}}>{vehicleDetails.No_Transported}</Button>
							<Button variant="contained" onClick={handleDecrement}>-</Button>
						</ButtonGroup>
					</Grid>

				</Grid>
				<Grid item container xs={12} alignItems="center">
					<Paper variant="outlined" className={classes.paper}>
						<Typography
							color="textSecondary"
							gutterBottom
						>
							Time
						</Typography>
						<Grid item container xs={12} spacing={2} justifyContent="center">
							<Grid item container xs={12} sm={12} md={6} lg={3} spacing={2}>
								<Grid item xs={6}>
									<Button
										variant="contained"
										fullWidth
										onClick={() => {
											dispatch(saveVehicleDetails({
												...vehicleDetails,
												T_Notified: new Date().toLocaleTimeString('en-US'),
											}))
										}}
									>
										Notified
									</Button>
								</Grid>
								<Grid item xs={6}>
									<TextField
										variant="outlined"
										size="small"
										color="secondary"
										name="T_Notified"
										fullWidth
										value={vehicleDetails.T_Notified}
										onChange={handleChange}
										onClick={() => {
											if (vehicleDetails.T_Notified === '')
												dispatch(saveVehicleDetails({
													...vehicleDetails,
													T_Notified: new Date().toLocaleTimeString('en-US'),
												}))
										}}
									/>
								</Grid>
							</Grid>

							<Grid item container xs={12} sm={12} md={6} lg={3} spacing={2}>
								<Grid item xs={6}>
									<Button
										variant="contained"
										fullWidth
										onClick={() => {
											dispatch(saveVehicleDetails({
												...vehicleDetails,
												T_enRoute: new Date().toLocaleTimeString('en-US'),
											}))
										}}
									>
										En Route
									</Button>
								</Grid>
								<Grid item xs={6}>
									<TextField
										variant="outlined"
										size="small"
										color="secondary"
										name="T_enRoute"
										fullWidth
										value={vehicleDetails.T_enRoute}
										onChange={handleChange}
										onClick={() => {
											if (vehicleDetails.T_enRoute === '')
												dispatch(saveVehicleDetails({
													...vehicleDetails,
													T_enRoute: new Date().toLocaleTimeString('en-US'),
												}))
										}}
									/>
								</Grid>
							</Grid>

							<Grid item container xs={12} sm={12} md={6} lg={3} spacing={2}>
								<Grid item xs={6}>
									<Button
										variant="contained"
										fullWidth
										onClick={() => {
											dispatch(saveVehicleDetails({
												...vehicleDetails,
												T_at_Scene: new Date().toLocaleTimeString('en-US'),
											}))
										}}
									>
										At Scene
									</Button>
								</Grid>
								<Grid item xs={6}>
									<TextField
										variant="outlined"
										size="small"
										color="secondary"
										name="T_at_Scene"
										fullWidth
										value={vehicleDetails.T_at_Scene}
										onChange={handleChange}
										onClick={() => {
											if (vehicleDetails.T_at_Scene === '')
												dispatch(saveVehicleDetails({
													...vehicleDetails,
													T_at_Scene: new Date().toLocaleTimeString('en-US'),
												}))
										}}
									/>
								</Grid>
							</Grid>

							<Grid item container xs={12} sm={12} md={6} lg={3} spacing={2}>
								<Grid item xs={6}>
									<Button
										variant="contained"
										fullWidth
										onClick={() => {
											dispatch(saveVehicleDetails({
												...vehicleDetails,
												T_Crew_Patient: new Date().toLocaleTimeString('en-US'),
											}))
										}}
									>
										Crew Patient
									</Button>
								</Grid>
								<Grid item xs={6}>
									<TextField
										variant="outlined"
										size="small"
										color="secondary"
										name="T_Crew_Patient"
										fullWidth
										value={vehicleDetails.T_Crew_Patient}
										onChange={handleChange}
										onClick={() => {
											if (vehicleDetails.T_Crew_Patient === '')
												dispatch(saveVehicleDetails({
													...vehicleDetails,
													T_Crew_Patient: new Date().toLocaleTimeString('en-US'),
												}))
										}}
									/>
								</Grid>
							</Grid>
							<Grid item container xs={12} sm={12} md={6} lg={3} spacing={2}>
								<Grid item xs={6}>
									<Button
										variant="contained"
										fullWidth
										onClick={() => {
											dispatch(saveVehicleDetails({
												...vehicleDetails,
												T_Left_Scene: new Date().toLocaleTimeString('en-US'),
											}))
										}}
									>
										Left Scene
									</Button>
								</Grid>
								<Grid item xs={6}>
									<TextField
										variant="outlined"
										size="small"
										color="secondary"
										name="T_Left_Scene"
										fullWidth
										value={vehicleDetails.T_Left_Scene}
										onChange={handleChange}
										onClick={() => {
											if (vehicleDetails.T_Left_Scene === '')
												dispatch(saveVehicleDetails({
													...vehicleDetails,
													T_Left_Scene: new Date().toLocaleTimeString('en-US'),
												}))
										}}
									/>
								</Grid>
							</Grid>

							<Grid item container xs={12} sm={12} md={6} lg={3} spacing={2}>
								<Grid item xs={6}>
									<Button
										variant="contained"
										fullWidth
										onClick={() => {
											dispatch(saveVehicleDetails({
												...vehicleDetails,
												T_at_destn: new Date().toLocaleTimeString('en-US'),
											}))
										}}
									>
										At Destination
									</Button>
								</Grid>
								<Grid item xs={6}>
									<TextField
										variant="outlined"
										size="small"
										color="secondary"
										name="T_at_destn"
										fullWidth
										value={vehicleDetails.T_at_destn}
										onChange={handleChange}
										onClick={() => {
											if (vehicleDetails.T_at_destn === '')
												dispatch(saveVehicleDetails({
													...vehicleDetails,
													T_at_destn: new Date().toLocaleTimeString('en-US'),
												}))
										}}
									/>
								</Grid>
							</Grid>

							<Grid item container xs={12} sm={12} md={6} lg={3} spacing={2}>
								<Grid item xs={6}>
									<Button
										variant="contained"
										fullWidth
										onClick={() => {
											dispatch(saveVehicleDetails({
												...vehicleDetails,
												T_available: new Date().toLocaleTimeString('en-US'),
											}))
										}}
									>
										Available
									</Button>
								</Grid>
								<Grid item xs={6}>
									<TextField
										variant="outlined"
										size="small"
										color="secondary"
										name="T_available"
										fullWidth
										value={vehicleDetails.T_available}
										onChange={handleChange}
										onClick={() => {
											if (vehicleDetails.T_available === '')
												dispatch(saveVehicleDetails({
													...vehicleDetails,
													T_available: new Date().toLocaleTimeString('en-US'),
												}))
										}}
									/>
								</Grid>
							</Grid>

							<Grid item container xs={12} sm={12} md={6} lg={3} spacing={2}>
								<Grid item xs={6}>
									<Button
										variant="contained"
										fullWidth
										onClick={() => {
											dispatch(saveVehicleDetails({
												...vehicleDetails,
												T_backarea: new Date().toLocaleTimeString('en-US'),
											}))
										}}
									>
										Back Area
									</Button>
								</Grid>
								<Grid item xs={6}>
									<TextField
										variant="outlined"
										size="small"
										color="secondary"
										name="T_backarea"
										fullWidth
										value={vehicleDetails.T_backarea}
										onChange={handleChange}
										onClick={() => {
											if (vehicleDetails.T_backarea === '')
												dispatch(saveVehicleDetails({
													...vehicleDetails,
													T_backarea: new Date().toLocaleTimeString('en-US'),
												}))
										}}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item container xs={12} sm={12} md={6} lg={6}>
					<Paper variant="outlined" className={classes.paper}>
						<Typography
							color="textSecondary"
							gutterBottom
						>
							Response to Scene
						</Typography>
						<Grid item container xs={12} spacing={2}>
							<Grid item xs={12} sm={12} md={12} lg={6}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
								>
									<InputLabel id="rts-type-label">Type</InputLabel>
									<Select
										labelId="rts-type-label"
										id="rts-type"
										name="RTS_Type"
										value={vehicleDetails.RTS_Type}
										onChange={handleChange}
										label="Type"
									>
										<MenuItem value={"Cold"}>Cold</MenuItem>
										<MenuItem value={"Hot"}>Hot</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={6}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
								>
									<InputLabel id="rts-change-label">Change in Response</InputLabel>
									<Select
										labelId="rts-change-label"
										id="rts-change"
										name="RTS_Change"
										value={vehicleDetails.RTS_Change}
										onChange={handleChange}
										label="Change in Response"
									>
										<MenuItem value={"Cold"}>Cold</MenuItem>
										<MenuItem value={"Hot"}>Hot</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>

					</Paper>
				</Grid>
				<Grid item container xs={12} sm={12} md={6} lg={6}>
					<Paper variant="outlined" className={classes.paper}>
						<Typography
							color="textSecondary"
							gutterBottom
						>
							Response from Scene
						</Typography>
						<Grid item container xs={12} spacing={2}>
							<Grid item xs={12} sm={12} md={12} lg={6}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
								>
									<InputLabel id="rfs-type-label">Type</InputLabel>
									<Select
										labelId="rfs-type-label"
										id="rfs-type"
										name="RFS_Type"
										value={vehicleDetails.RFS_Type}
										onChange={handleChange}
										label="Type"
									>
										<MenuItem value={"Cold"}>Cold</MenuItem>
										<MenuItem value={"Hot"}>Hot</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={6}>
								<FormControl
									variant="filled"
									color="secondary"
									size="small"
									fullWidth
								>
									<InputLabel id="rfs-change-label">Change in Response</InputLabel>
									<Select
										labelId="rfs-change-label"
										id="rfs-change"
										name="RFS_Change"
										value={vehicleDetails.RFS_Change}
										onChange={handleChange}
										label="Change in Response"
									>
										<MenuItem value={"Cold"}>Cold</MenuItem>
										<MenuItem value={"Hot"}>Hot</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item container xs={12}>
					<Paper variant="outlined" className={classes.paper}>
						<Typography
							color="textSecondary"
							gutterBottom
						>
							Crew Type
						</Typography>
						<Grid item container xs={12} spacing={2}>
							<Grid item container xs={12} sm={12} md={4} lg={4} spacing={2}>
								<Grid item xs={12} sm={6} md={12} lg={12}>
									<FormControl
										variant="filled"
										color="secondary"
										size="small"
										fullWidth
									>
										<InputLabel id="c-driver-label">Driver</InputLabel>
										<Select
											labelId="c-driver-label"
											id="c-driver"
											name="C_driver"
											value={vehicleDetails.C_driver}
											onChange={handleChange}
											label="Driver"
										>
											{crewTypes.map((item, index) => (
												<MenuItem key={index} value={item}>{item}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={6} md={12} lg={12}>
									{vehicleDetails.C_driver !== "Other" ? '' : (
										<TextField
											variant="filled"
											size="small"
											color="secondary"
											label="Other"
											name="C_driv_oth"
											value={vehicleDetails.C_driv_oth}
											onChange={handleChange}
											fullWidth
										/>
									)}
								</Grid>
							</Grid>
							<Grid item container xs={12} sm={12} md={4} lg={4} spacing={2}>
								<Grid item xs={12} sm={6} md={12} lg={12}>
									<FormControl
										variant="filled"
										color="secondary"
										size="small"
										fullWidth
									>
										<InputLabel id="c-attendant-label">Attendant</InputLabel>
										<Select
											labelId="c-attendant-label"
											id="c-attendant"
											name="C_attendant"
											value={vehicleDetails.C_attendant}
											onChange={handleChange}
											label="Attendant"
										>
											{crewTypes.map((item, index) => (
												<MenuItem key={index} value={item}>{item}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={6} md={12} lg={12}>
									{vehicleDetails.C_attendant !== "Other" ? '' : (
										<TextField
											variant="filled"
											size="small"
											color="secondary"
											label="Other"
											name="C_attn_oth"
											value={vehicleDetails.C_attn_oth}
											onChange={handleChange}
											fullWidth
										/>
									)}
								</Grid>
							</Grid>
							<Grid item container xs={12} sm={12} md={4} lg={4} spacing={2}>
								<Grid item xs={12} sm={6} md={12} lg={12}>
									<FormControl
										variant="filled"
										color="secondary"
										size="small"
										fullWidth
									>
										<InputLabel id="c-assistant-label">Assistant</InputLabel>
										<Select
											labelId="c-assistant-label"
											id="c-assistant"
											name="C_assistant"
											value={vehicleDetails.C_assistant}
											onChange={handleChange}
											label="Assistant"
										>
											{crewTypes.map((item, index) => (
												<MenuItem key={index} value={item}>{item}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={6} md={12} lg={12}>
									{vehicleDetails.C_assistant !== "Other" ? '' : (
										<TextField
											variant="filled"
											size="small"
											color="secondary"
											label="Other"
											name="C_asst_oth"
											value={vehicleDetails.C_asst_oth}
											onChange={handleChange}
											fullWidth
										/>
									)}
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item container xs={12}>
					<Paper variant="outlined" className={classes.paper}>
						<Typography
							color="textSecondary"
							gutterBottom
						>
							Mileage
						</Typography>
						<Grid item container xs={12} spacing={2} justifyContent="center">
							<Grid item xs={12} lg={2}>
								<TextField
									label="Out"
									variant="filled"
									size="small"
									color="secondary"
									name="M_Out"
									value={vehicleDetails.M_Out}
									onChange={handleChange}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} lg={2}>
								<TextField
									label="At Scene"
									variant="filled"
									size="small"
									name="M_atScene"
									value={vehicleDetails.M_atScene}
									onChange={handleChange}
									color="secondary"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} lg={2}>
								<TextField
									label="At Destination"
									variant="filled"
									size="small"
									name="M_atDest"
									value={vehicleDetails.M_atDest}
									onChange={handleChange}
									color="secondary"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} lg={2}>
								<TextField
									label="In"
									variant="filled"
									size="small"
									name="M_In"
									value={vehicleDetails.M_In}
									onChange={handleChange}
									color="secondary"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} lg={2}>
								<TextField
									label="Total"
									variant="filled"
									size="small"
									name="M_Total"
									value={vehicleDetails.M_Total}
									onChange={handleChange}
									color="secondary"
									fullWidth
								/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</Container >
	)
}

export default VehicleDetails
