import React, { useState } from 'react';
import { Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const FetchPatients = () => {
	const [patients, setPatients] = useState([]);

	const callPatients = async () => {

		fetch("http://localhost:9000/testAPI/patients")
			.then(res => res.text())
			.then(res => setPatients(JSON.parse(res)))
			.catch(err => err)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		callPatients();
	}

	return (
		<div>
			<Button
				variant="contained"
				color="primary"
				onClick={handleSubmit}
			>
				Show Patients
			</Button>

			<TableContainer component={Paper}>
				<Table aria-label="patients table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Password</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{patients.map((item) => {
							return (
								<TableRow>
									<TableCell component="th" scope="row">
										{item.name}
									</TableCell>
									<TableCell align="right">
										{item.password}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default FetchPatients
