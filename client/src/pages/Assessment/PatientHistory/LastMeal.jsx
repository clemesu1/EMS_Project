import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../features/patientHistory';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	}
}));

const LastMeal = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const patientHistory = useSelector((state) => state.patientHistory.value)

	const handleChange = (e) => {
		dispatch(store({
			...patientHistory,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<div className={classes.root}>
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
							name="LM_Comment"
							value={patientHistory.LM_Comment}
							onChange={handleChange}
						/>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default LastMeal
