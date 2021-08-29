import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';
import Interventions from './VitalSigns/Interventions';
import Medications from './VitalSigns/Medications';
import VitalSign from './VitalSigns/VitalSign';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        padding: theme.spacing(3),
    },
    tabInactive: {
        display: 'none',
    },
}));


const VitalSigns = (props) => {
    const { vitalSignFields } = props;

    const { interventions, setInterventions, medications, setMedications, vitalSign, setVitalSign } = vitalSignFields;

    const classes = useStyles();

    const { match, history } = props;
    const { params } = match;
    const { page } = params;


    const tabNameToIndex = {
        0: "interventions",
        1: "medications",
        2: "vital-sign",
    }

    const indexToTabName = {
        "interventions": 0,
        "medications": 1,
        "vital-sign": 2,
    }

    const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/vital-signs/${tabNameToIndex[newValue]}`)
        setSelectedTab(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="Interventions" />
                    <Tab label="Medications" />
                    <Tab label="Vital Sign" />
                </Tabs>
            </AppBar>
            <Box p={2}>
                <Typography
                    component="div"
                    role="tabpanel"
                    hidden={selectedTab !== indexToTabName[page]}
                    id={`vital-signs-tabpanel-${page}`}
                    aria-labelledby={`vital-signs-tab-${page}`}
                >
                    {selectedTab === 0 && <Interventions state={interventions} setState={setInterventions}  {...props} />}
                    {selectedTab === 1 && <Medications state={medications} setState={setMedications} {...props} />}
                    {selectedTab === 2 && <VitalSign state={vitalSign} setState={setVitalSign} {...props} />}

                </Typography>
            </Box>
        </div>
    )
}

export default VitalSigns
