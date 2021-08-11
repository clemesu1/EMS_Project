import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

const FetchAPI = () => {
	const [apiResponse, setAPIResponse] = useState('');

	const [state, setState] = useState({
		name: '',
		password: '',
	});

	const callAPI = () => {
		fetch("http://localhost:9000/testAPI")
			.then(res => res.text())
			.then(res => setAPIResponse(res))
			.catch(err => err)
	}

	useEffect(() => {
		callAPI();
	}, []);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const { name, password } = state;

		const patient = {
			name,
			password
		}

		axios
			.post('http://localhost:9000/testAPI/create', patient)
			.then(() => console.log('Patient Created'))
			.catch(err => {
				console.error(err);
			});
	}

	return (
		<div>
			<p className="App-intro">{apiResponse}</p>
			<form onSubmit={handleSubmit}>

				<TextField
					label="Enter Name"
					variant="outlined"
					margin="normal"
					name="name"
					value={state.name}
					autoComplete="name"
					onChange={handleChange}
					required
				/>

				<div>
					<TextField
						label="Enter Password"
						type="password"
						variant="outlined"
						margin="normal"
						name="password"
						autoComplete="current-password"
						value={state.password}
						onChange={handleChange}
						required

					/>
				</div>
				<Button
					variant="contained"
					color="primary"
					onClick={handleSubmit}
				>
					Add Patient
				</Button>
			</form>

		</div>
	)
}

export default FetchAPI
