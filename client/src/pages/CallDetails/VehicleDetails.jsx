import { Grid, TextField, Typography, Paper, Button, Box, FormControl, Select, MenuItem } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		width: "100%",
		height: "100%",
		padding: theme.spacing(2),
		margin: 'auto',
	},
	formControl: {
		minWidth: 120,
	},
	textField: {
		width: 120,
	}
}));

const crewTypes = ["EMT-1", "EMT-2", "EMT-3", "EMR", "PCP", "ACP", "CCP", "RT", "RN", "MD", "Student", "Other"];

const VehicleDetails = ({ state, setState }) => {
	const classes = useStyles();

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	return (
		<form className={classes.root}>
			<Grid container spacing={3} justifyContent="center" alignItems="center">
				<Grid item xs={12} container>
					<Grid item xs container spacing={2} justifyContent="flex-start" alignItems="center">
						<Grid item>
							<Typography variant="subtitle1">Number of Patients Transported</Typography>
						</Grid>
						<Grid item>
							<TextField
								name="noPatientsTransported"
								variant="outlined"
								color="secondary"
								type="number"
								size="small"
								value={state.noPatientsTransported}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} container>
					<Paper variant="outlined" className={classes.paper}>
						<Grid item xs={12}>
							<Typography variant="subtitle1" component="div">
								<Box fontWeight="fontWeightMedium">
									Time
								</Box>
							</Typography>
						</Grid>
						<Grid item xs={12} container justifyContent="center" alignItems="center" spacing={2}>
							<Grid item xs={3} container justifyContent="flex-start" alignItems="center" spacing={1}>
								<Grid item>
									<Button variant="contained" onClick={() => {
										setState({
											...state,
											vhTimeNotified: new Date().toLocaleTimeString('en-US'),
										})
									}}>Notified</Button>
								</Grid>
								<Grid item>
									<TextField
										name="vhTimeNotified"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhTimeNotified}
										onChange={handleChange}
										onClick={() => {
											if (state.vhTimeNotified === '')

												setState({
													...state,
													vhTimeNotified: new Date().toLocaleTimeString('en-US'),
												})
										}}
									/>
								</Grid>
							</Grid>
							<Grid item xs={3} container justifyContent="flex-start" alignItems="center" spacing={1}>
								<Grid item>
									<Button variant="contained" onClick={() => {
										setState({
											...state,
											vhTimeEnRoute: new Date().toLocaleTimeString('en-US'),
										})
									}}>En Route</Button>
								</Grid>
								<Grid item>
									<TextField
										name="vhTimeEnRoute"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhTimeEnRoute}
										onChange={handleChange}
										onClick={() => {
											if (state.vhTimeEnRoute === '')

												setState({
													...state,
													vhTimeEnRoute: new Date().toLocaleTimeString('en-US'),
												})
										}}
									/>
								</Grid>
							</Grid>
							<Grid item xs={3} container justifyContent="flex-start" alignItems="center" spacing={1}>
								<Grid item>
									<Button variant="contained" onClick={() => {
										setState({
											...state,
											vhTimeAtScene: new Date().toLocaleTimeString('en-US'),
										})
									}}>At Scene</Button>
								</Grid>
								<Grid item>
									<TextField
										name="vhTimeAtScene"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhTimeAtScene}
										onChange={handleChange}
										onClick={() => {
											if (state.vhTimeAtScene === '')

												setState({
													...state,
													vhTimeAtScene: new Date().toLocaleTimeString('en-US'),
												})
										}} />
								</Grid>
							</Grid>
							<Grid item xs={3} container justifyContent="flex-start" alignItems="center" spacing={1}>
								<Grid item>
									<Button variant="contained" onClick={() => {
										setState({
											...state,
											vhTimeCrewPatient: new Date().toLocaleTimeString('en-US'),
										})
									}}>Crew Patient</Button>
								</Grid>
								<Grid item>
									<TextField
										name="vhTimeCrewPatient"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhTimeCrewPatient}
										onChange={handleChange}
										onClick={() => {
											if (state.vhTimeCrewPatient === '')

												setState({
													...state,
													vhTimeCrewPatient: new Date().toLocaleTimeString('en-US'),
												})
										}}
									/>
								</Grid>
							</Grid>

							<Grid item xs={3} container justifyContent="flex-start" alignItems="center" spacing={1}>
								<Grid item>
									<Button variant="contained" onClick={() => {
										setState({
											...state,
											vhTimeLeftScene: new Date().toLocaleTimeString('en-US'),
										})
									}}>Left Scene</Button>
								</Grid>
								<Grid item>
									<TextField
										name="vhTimeLeftScene"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhTimeLeftScene}
										onChange={handleChange}
										onClick={() => {
											if (state.vhTimeLeftScene === '')
												setState({
													...state,
													vhTimeLeftScene: new Date().toLocaleTimeString('en-US'),
												})
										}}
									/>
								</Grid>
							</Grid>
							<Grid item xs={3} container justifyContent="flex-start" alignItems="center" spacing={1}>
								<Grid item>
									<Button variant="contained" onClick={() => {
										setState({
											...state,
											vhTimeAtDestination: new Date().toLocaleTimeString('en-US'),
										})
									}}>At Destination</Button>
								</Grid>
								<Grid item>
									<TextField
										name="vhTimeAtDestination"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhTimeAtDestination}
										onChange={handleChange}
										onClick={() => {
											if (state.vhTimeAtDestination === '')

												setState({
													...state,
													vhTimeAtDestination: new Date().toLocaleTimeString('en-US'),
												})
										}}
									/>
								</Grid>
							</Grid>
							<Grid item xs={3} container justifyContent="flex-start" alignItems="center" spacing={1}>
								<Grid item>
									<Button variant="contained" onClick={() => {
										setState({
											...state,
											vhTimeAvailable: new Date().toLocaleTimeString('en-US'),
										})
									}}>Available</Button>
								</Grid>
								<Grid item>
									<TextField
										name="vhTimeAvailable"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhTimeAvailable}
										onChange={handleChange}
										onClick={() => {
											if (state.vhTimeAvailable === '')

												setState({
													...state,
													vhTimeAvailable: new Date().toLocaleTimeString('en-US'),
												})
										}}
									/>
								</Grid>
							</Grid>
							<Grid item xs={3} container justifyContent="flex-start" alignItems="center" spacing={1}>
								<Grid item>
									<Button variant="contained" onClick={() => {
										setState({
											...state,
											vhTimeBackArea: new Date().toLocaleTimeString('en-US'),
										})
									}}>Back Area</Button>
								</Grid>
								<Grid item>
									<TextField
										name="vhTimeBackArea"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhTimeBackArea}
										onChange={handleChange}
										onClick={() => {
											if (state.vhTimeBackArea === '')

												setState({
													...state,
													vhTimeBackArea: new Date().toLocaleTimeString('en-US'),
												})
										}}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid container item xs={12} spacing={1}>
					<Grid container item xs={6}>
						<Paper variant="outlined" className={classes.paper}>
							<Grid item xs={12}>
								<Typography variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Response to Scene
									</Box>
								</Typography>
							</Grid>
							<Grid item xs={12} container alignItems="center" spacing={2}>
								<Grid item xs={6} container justifyContent="flex-start" alignItems="center" spacing={1}>
									<Grid item>
										<Typography variant="subtitle1" component="div">
											<Box fontWeight="fontWeightMedium">
												Type
											</Box>
										</Typography>
									</Grid>
									<Grid item>
										<FormControl
											variant="outlined"
											color="secondary"
											size="small"
											className={classes.formControl}
										>
											<Select
												name="vhResponseToScene"
												value={state.vhResponseToScene}
												onChange={handleChange}
											>
												<MenuItem value={"Cold"}>Cold</MenuItem>
												<MenuItem value={"Hot"}>Hot</MenuItem>
											</Select>
										</FormControl>
									</Grid>
								</Grid>
								<Grid item xs={6} container justifyContent="flex-start" alignItems="center" spacing={1}>
									<Grid item>
										<Typography variant="subtitle1" component="div">
											<Box fontWeight="fontWeightMedium">
												Change in Response

											</Box>
										</Typography>
									</Grid>
									<Grid item>
										<FormControl
											variant="outlined"
											color="secondary"
											size="small"
											className={classes.formControl}
										>
											<Select
												name="vhResponseToSceneChg"
												value={state.vhResponseToSceneChg}
												onChange={handleChange}
											>
												<MenuItem value={"Cold"}>Cold</MenuItem>
												<MenuItem value={"Hot"}>Hot</MenuItem>
											</Select>
										</FormControl>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid container item xs={6}>
						<Paper variant="outlined" className={classes.paper}>
							<Grid item xs={12}>
								<Typography variant="subtitle1" component="div">
									<Box fontWeight="fontWeightMedium">
										Response from Scene
									</Box>
								</Typography>
							</Grid>
							<Grid item xs={12} container alignItems="center" spacing={2}>
								<Grid item xs={6} container justifyContent="flex-start" alignItems="center" spacing={1}>
									<Grid item>
										<Typography variant="subtitle1" component="div">
											<Box fontWeight="fontWeightMedium">
												Type
											</Box>
										</Typography>
									</Grid>
									<Grid item>
										<FormControl
											variant="outlined"
											color="secondary"
											size="small"
											className={classes.formControl}
										>
											<Select
												name="vhResponseFromScene"
												value={state.vhResponseFromScene}
												onChange={handleChange}
											>
												<MenuItem value={"Cold"}>Cold</MenuItem>
												<MenuItem value={"Hot"}>Hot</MenuItem>
											</Select>
										</FormControl>
									</Grid>
								</Grid>
								<Grid item xs={6} container justifyContent="flex-start" alignItems="center" spacing={1}>
									<Grid item>
										<Typography variant="subtitle1" component="div">
											<Box fontWeight="fontWeightMedium">
												Change in Response
											</Box>
										</Typography>
									</Grid>
									<Grid item>
										<FormControl
											variant="outlined"
											color="secondary"
											size="small"
											className={classes.formControl}
										>
											<Select
												name="vhResponseFromSceneChg"
												value={state.vhResponseFromSceneChg}
												onChange={handleChange}
											>
												<MenuItem value={"Cold"}>Cold</MenuItem>
												<MenuItem value={"Hot"}>Hot</MenuItem>
											</Select>
										</FormControl>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
				<Grid item xs={12} container>
					<Paper variant="outlined" className={classes.paper}>
						<Grid item xs={12}>
							<Typography variant="subtitle1" component="div">
								<Box fontWeight="fontWeightMedium">
									Crew Type
								</Box>
							</Typography>
						</Grid>
						<Grid item xs={12} container justifyContent="center" alignItems="flex-start" spacing={2}>
							<Grid item xs={4} container spacing={2}>
								<Grid item xs={12} container justifyContent="flex-start" alignItems="center" spacing={1}>
									<Grid item>
										<Typography variant="subtitle1" component="div">
											<Box fontWeight="fontWeightMedium">
												Driver
											</Box>
										</Typography>
									</Grid>
									<Grid item>
										<FormControl
											variant="outlined"
											color="secondary"
											size="small"
											className={classes.formControl}
										>
											<Select
												name="crwDriv"
												value={state.crwDriv}
												onChange={handleChange}
											>
												{crewTypes.map((item, index) => (
													<MenuItem key={index} value={item}>{item}</MenuItem>
												))}
											</Select>
										</FormControl>
									</Grid>
								</Grid>
								{state.crwDriv !== 'Other' ? '' :
									<Grid item xs={12} container justifyContent="flex-start" alignItems="center" spacing={1}>
										<Grid item>
											<Typography variant="subtitle1" component="div">
												<Box fontWeight="fontWeightMedium">
													Other
												</Box>
											</Typography>
										</Grid>
										<Grid item>
											<TextField
												name="crwDrOth"
												variant="outlined"
												color="secondary"
												size="small"
												value={state.crwDrOth}
												onChange={handleChange}
											/>
										</Grid>
									</Grid>
								}
							</Grid>
							<Grid item xs={4} container spacing={2}>
								<Grid item xs={12} container justifyContent="flex-start" alignItems="center" spacing={1}>
									<Grid item>
										<Typography variant="subtitle1" component="div">
											<Box fontWeight="fontWeightMedium">
												Attendant
											</Box>
										</Typography>
									</Grid>
									<Grid item>
										<FormControl
											variant="outlined"
											color="secondary"
											size="small"
											className={classes.formControl}
										>
											<Select
												name="crwAtte"
												value={state.crwAtte}
												onChange={handleChange}
											>
												{crewTypes.map((item, index) => (
													<MenuItem key={index} value={item}>{item}</MenuItem>
												))}
											</Select>
										</FormControl>
									</Grid>
								</Grid>
								{state.crwAtte !== 'Other' ? '' :
									<Grid item xs={12} container justifyContent="flex-start" alignItems="center" spacing={1}>
										<Grid item>
											<Typography variant="subtitle1" component="div">
												<Box fontWeight="fontWeightMedium">
													Other
												</Box>
											</Typography>
										</Grid>
										<Grid item>
											<TextField
												name="crwAttnOth"
												variant="outlined"
												color="secondary"
												size="small"
												value={state.crwAttnOth}
												onChange={handleChange}
											/>
										</Grid>
									</Grid>
								}
							</Grid>
							<Grid item xs={4} container spacing={2}>
								<Grid item xs={12} container justifyContent="flex-start" alignItems="center" spacing={1}>
									<Grid item>
										<Typography variant="subtitle1" component="div">
											<Box fontWeight="fontWeightMedium">
												Assisting Personnel
											</Box>
										</Typography>
									</Grid>
									<Grid item>
										<FormControl
											variant="outlined"
											color="secondary"
											size="small"
											className={classes.formControl}
										>
											<Select
												name="crwAsst"
												value={state.crwAsst}
												onChange={handleChange}
											>
												{crewTypes.map((item, index) => (
													<MenuItem key={index} value={item}>{item}</MenuItem>
												))}
											</Select>
										</FormControl>
									</Grid>
								</Grid>
								{state.crwAsst !== 'Other' ? '' :
									<Grid item xs={12} container justifyContent="flex-start" alignItems="center" spacing={1}>
										<Grid item>
											<Typography variant="subtitle1" component="div">
												<Box fontWeight="fontWeightMedium">
													Other
												</Box>
											</Typography>
										</Grid>
										<Grid item>
											<TextField
												name="crwAsstOth"
												variant="outlined"
												color="secondary"
												size="small"
												value={state.crwAsstOth}
												onChange={handleChange}
											/>
										</Grid>
									</Grid>
								}
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={12} container>
					<Paper variant="outlined" className={classes.paper}>
						<Grid item xs={12}>
							<Typography variant="subtitle1" component="div">
								<Box fontWeight="fontWeightMedium">
									Mileage
								</Box>
							</Typography>
						</Grid>
						<Grid item xs={12} container justifyContent="center" alignItems="flex-start" spacing={2}>
							<Grid container item xs justifyContent="flex-start" alignItems="center" wrap="nowrap" spacing={1}>
								<Grid item>
									<Typography variant="subtitle1" component="div">
										<Box fontWeight="fontWeightMedium">
											Out
										</Box>
									</Typography>
								</Grid>
								<Grid item>
									<TextField
										name="vhOut"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhOut}
										onChange={handleChange}
										className={classes.textField}
									/>
								</Grid>
							</Grid>
							<Grid container item xs justifyContent="flex-start" alignItems="center" wrap="nowrap" spacing={1}>
								<Grid item>
									<Typography variant="subtitle1" component="div">
										<Box fontWeight="fontWeightMedium">
											At Scene
										</Box>
									</Typography>
								</Grid>
								<Grid item>
									<TextField
										name="vhAtScn"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhAtScn}
										onChange={handleChange}
										className={classes.textField}
									/>
								</Grid>
							</Grid>
							<Grid container item xs justifyContent="flex-start" alignItems="center" wrap="nowrap" spacing={1}>
								<Grid item>
									<Typography variant="subtitle1" component="div">
										<Box fontWeight="fontWeightMedium">
											At Destination
										</Box>
									</Typography>
								</Grid>
								<Grid item>
									<TextField
										name="vhAtDestn"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhAtDestn}
										onChange={handleChange}
										className={classes.textField}
									/>
								</Grid>
							</Grid>
							<Grid container item xs justifyContent="flex-start" alignItems="center" wrap="nowrap" spacing={1}>
								<Grid item>
									<Typography variant="subtitle1" component="div">
										<Box fontWeight="fontWeightMedium">
											In
										</Box>
									</Typography>
								</Grid>
								<Grid item>
									<TextField
										name="vhIn"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhIn}
										onChange={handleChange}
										className={classes.textField}
									/>
								</Grid>
							</Grid>
							<Grid container item xs justifyContent="flex-start" alignItems="center" wrap="nowrap" spacing={1}>
								<Grid item>
									<Typography variant="subtitle1" component="div">
										<Box fontWeight="fontWeightMedium">
											Total
										</Box>
									</Typography>
								</Grid>
								<Grid item>
									<TextField
										name="vhTotal"
										variant="outlined"
										color="secondary"
										size="small"
										value={state.vhTotal}
										onChange={handleChange}
										className={classes.textField}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</form>
	)
}

export default VehicleDetails
