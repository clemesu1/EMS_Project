import React, { useState } from 'react'
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core'
import Respiratory from '../Assessment/ComplaintBased/Respiratory'
import Seizure from '../Assessment/ComplaintBased/Seizure'
import ToxicExposure from '../Assessment/ComplaintBased/ToxicExposure'
import CardiacArrest from '../Assessment/ComplaintBased/CardiacArrest'
import ChestPain from '../Assessment/ComplaintBased/ChestPain'
import Neonatal from '../Assessment/ComplaintBased/Neonatal'
import Obstetric from '../Assessment/ComplaintBased/Obstetric'
import Trauma from '../Assessment/ComplaintBased/Trauma'

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`complaint-based-tabpanel-${index}`}
			aria-labelledby={`complaint-based-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Typography component="div">{children}</Typography>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `complaint-based-tab-${index}`,
		'aria-controls': `complaint-based-tabpanel-${index}`,
	};
}

const ComplaintBased = (props) => {
	const { assessmentItems } = props;

	const { respiratory, setRespiratory, breathSoundChecksII, setBreathSoundChecksII, seizure, setSeizure } = assessmentItems;


	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (e, value) => {
		setSelectedTab(value);
	}

	return (
		<div>
			<AppBar position="static">
				<Tabs value={selectedTab} onChange={handleTabChange} aria-label="complaint based tabs">
					<Tab label="Respiratory" {...a11yProps(0)} />
					<Tab label="Seizure" {...a11yProps(1)} />
					<Tab label="Toxic Exposure" {...a11yProps(2)} />
					<Tab label="Cardiac Arrest" {...a11yProps(3)} />
					<Tab label="Chest Pain" {...a11yProps(4)} />
					<Tab label="Neonatal" {...a11yProps(5)} />
					<Tab label="Obstetric" {...a11yProps(6)} />
					<Tab label="Trauma" {...a11yProps(7)} />
				</Tabs>
			</AppBar>
			<Box p={3}>
				<TabPanel value={selectedTab} index={0}>
					<Respiratory state={respiratory} setState={setRespiratory} breath={breathSoundChecksII} setBreath={setBreathSoundChecksII}/>
				</TabPanel>
				<TabPanel value={selectedTab} index={1}>
					<Seizure  state={seizure} setState={setSeizure} />
				</TabPanel>
				<TabPanel value={selectedTab} index={2}>
					<ToxicExposure />
				</TabPanel>
				<TabPanel value={selectedTab} index={3}>
					<CardiacArrest />
				</TabPanel>
				<TabPanel value={selectedTab} index={4}>
					<ChestPain />
				</TabPanel>
				<TabPanel value={selectedTab} index={5}>
					<Neonatal />
				</TabPanel>
				<TabPanel value={selectedTab} index={6}>
					<Obstetric />
				</TabPanel>
			</Box>
			<TabPanel value={selectedTab} index={7}>
				<Trauma />
			</TabPanel>

		</div>
	)
}

export default ComplaintBased
