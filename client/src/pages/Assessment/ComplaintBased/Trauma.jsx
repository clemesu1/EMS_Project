import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Head from '../ComplaintBased/Trauma/Head'
import Neck from '../ComplaintBased/Trauma/Neck'
import Abdoment from '../ComplaintBased/Trauma/Abdoment'
import Pelvis from '../ComplaintBased/Trauma/Pelvis'
import UpperExtremities from '../ComplaintBased/Trauma/UpperExtremities'
import LowerExtremities from '../ComplaintBased/Trauma/LowerExtremities'
import Back from '../ComplaintBased/Trauma/Back'

const useStyles = makeStyles((theme) => ({
	content: {
		paddingTop: theme.spacing(5),
	},
}));

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
    const classes = useStyles();

    const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (e, value) => {
		setSelectedTab(value);
	}
    
    return (
        <div className={classes.content}>
			<AppBar position="static">
				<Tabs value={selectedTab} onChange={handleTabChange} aria-label="complaint based tabs">
					<Tab label="Head" {...a11yProps(0)} />
					<Tab label="Neck" {...a11yProps(1)} />
					<Tab label="Abdoment" {...a11yProps(2)} />
					<Tab label="Pelvis" {...a11yProps(3)} />
					<Tab label="Upper Extremities" {...a11yProps(4)} />
					<Tab label="Lower Extremities" {...a11yProps(5)} />
					<Tab label="Back" {...a11yProps(6)} />
				</Tabs>
			</AppBar>
			<TabPanel value={selectedTab} index={0}>
                <Head />
			</TabPanel>
			<TabPanel value={selectedTab} index={1}>
                <Neck/>
			</TabPanel>
			<TabPanel value={selectedTab} index={2}>
                <Abdoment/>
			</TabPanel>
			<TabPanel value={selectedTab} index={3}>
                <Pelvis/>
			</TabPanel>
			<TabPanel value={selectedTab} index={4}>
                <UpperExtremities/>
			</TabPanel>
			<TabPanel value={selectedTab} index={5}>
                <LowerExtremities/>
			</TabPanel>
			<TabPanel value={selectedTab} index={6}>
                <Back />
			</TabPanel>
		</div>
    )
}

export default Trauma
