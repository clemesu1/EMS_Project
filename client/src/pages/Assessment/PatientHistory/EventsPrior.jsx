import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../features/patientHistory';

const EventsPrior = () => {
	const dispatch = useDispatch();
	const patientHistory = useSelector((state) => state.patientHistory.value)

	const handleChange = (e) => {
		dispatch(store({
			...patientHistory,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<Grid container spacing={3}>
			<Grid item container xs={12}>
				<Grid item xs={12}>
					<Typography>Comments</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
						multiline
						fullWidth
						rows={18}
						margin="normal"
						variant="outlined"
						color="secondary"
						name="EP_Comment"
						value={patientHistory.EP_Comment}
						onChange={handleChange}
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default EventsPrior
