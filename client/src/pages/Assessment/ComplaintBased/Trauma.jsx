import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react'

import Head from '../ComplaintBased/Trauma/Head'
import Neck from '../ComplaintBased/Trauma/Neck'
import Abdoment from '../ComplaintBased/Trauma/Abdoment'
import Pelvis from '../ComplaintBased/Trauma/Pelvis'
import UpperExtremities from '../ComplaintBased/Trauma/UpperExtremities'
import LowerExtremities from '../ComplaintBased/Trauma/LowerExtremities'
import Back from '../ComplaintBased/Trauma/Back'
import Chest from './Trauma/Chest';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`trauma-tabpanel-${index}`}
			aria-labelledby={`trauma-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography component="div">{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `trauma-tab-${index}`,
		'aria-controls': `trauma-tabpanel-${index}`,
	};
}

const Trauma = (props) => {

	const [selectedTab, setSelectedTab] = useState(0);
	const { state, setState } = props;

	const handleTabChange = (e, value) => {
		setSelectedTab(value);
	}

	return (
		<div>
			<AppBar position="static">
				<Tabs value={selectedTab} onChange={handleTabChange} variant="scrollable" aria-label="complaint based tabs">
					<Tab label="Head" {...a11yProps(0)} />
					<Tab label="Neck" {...a11yProps(1)} />
					<Tab label="Chest" {...a11yProps(2)} />
					<Tab label="Abdoment" {...a11yProps(3)} />
					<Tab label="Pelvis" {...a11yProps(4)} />
					<Tab label="Upper Extremities" {...a11yProps(5)} />
					<Tab label="Lower Extremities" {...a11yProps(6)} />
					<Tab label="Back" {...a11yProps(7)} />
				</Tabs>
			</AppBar>
			<TabPanel value={selectedTab} index={0}>
				<Head state={state} setState={setState} />
			</TabPanel>
			<TabPanel value={selectedTab} index={1}>
				<Neck state={state} setState={setState} />
			</TabPanel>
			<TabPanel value={selectedTab} index={2}>
				<Chest state={state} setState={setState} />
			</TabPanel>
			<TabPanel value={selectedTab} index={3}>
				<Abdoment state={state} setState={setState} />
			</TabPanel>
			<TabPanel value={selectedTab} index={4}>
				<Pelvis state={state} setState={setState}/>
			</TabPanel>
			<TabPanel value={selectedTab} index={5}>
				<UpperExtremities state={state} setState={setState}/>
			</TabPanel>
			<TabPanel value={selectedTab} index={6}>
				<LowerExtremities state={state} setState={setState}/>
			</TabPanel>
			<TabPanel value={selectedTab} index={7}>
				<Back state={state} setState={setState}/>
			</TabPanel>
		</div>
	)
}

export default Trauma
