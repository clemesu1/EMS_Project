import React from 'react'
import { Box, Button, ButtonGroup, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(2),
        margin: 'auto',
    },
    root: {
        '&$disabled': {
            color: '#000000',

        },
    },
    disabled: {},
}));

const Seizure = (props) => {
    const { state, setState } = props;
    const classes = useStyles();

    const handleChange = (e) => {
        setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }


    const handleDurationIncrement = () => {
        setState(prev => ({
            ...prev,
            Seiz_Duration: state.Seiz_Duration + 1,
        }));
    }

    const handleDurationDecrement = () => {
        setState(prev => ({
            ...prev,
            Seiz_Duration: state.Seiz_Duration - 1,
        }));
    }

    const handleCountIncrement = () => {
        setState(prev => ({
            ...prev,
            No_of_Seizure: state.No_of_Seizure + 1,
        }));
    }

    const handleCountDecrement = () => {
        setState(prev => ({
            ...prev,
            No_of_Seizure: state.No_of_Seizure - 1,
        }));
    }



    return (
        <Container>
            <Grid container spacing={3}>

                <Grid item container xs={12} md={4}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Witnessed Seizure
                        </Typography>
                        <Grid item xs={12}>
                            <Box p={1}>
                                <FormControl component="fieldset" color="secondary">
                                    <RadioGroup row aria-label="witnessed seizure" name="Witnessed_Seizure" value={state.Witnessed_Seizure} onChange={handleChange}>
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container xs={12} md={8} spacing={3}>
                    <Grid item xs={12}>
                        <FormControl
                            variant="filled"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <InputLabel id="cause-label">Cause</InputLabel>
                            <Select
                                labelId="cause-label"
                                name="Cause"
                                value={state.Cause || ''}
                                onChange={handleChange}
                            >
                                <MenuItem value={"Diabetes"}>Diabetes</MenuItem>
                                <MenuItem value={"Epilepsy"}>Epilepsy</MenuItem>
                                <MenuItem value={"Fever"}>Fever</MenuItem>
                                <MenuItem value={"Over Dose"}>Over Dose</MenuItem>
                                <MenuItem value={"Trauma"}>Trauma</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        {state.Cause !== "Other" ? '' : (
                            <TextField
                                variant="filled"
                                size="small"
                                color="secondary"
                                label="Other"
                                name="Cause_Other"
                                value={state.Cause_Other}
                                onChange={handleChange}
                                fullWidth
                            />
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="witness-of-seizure-label">Witness of Seizure</InputLabel>
                        <Select
                            labelId="witness-of-seizure-label"
                            name="Witness_of_Seizure"
                            value={state.Witness_of_Seizure || ''}
                            onChange={handleChange}
                        >
                            <MenuItem value={"Family / Friend"}>Family / Friend</MenuItem>
                            <MenuItem value={"Bystander"}>Bystander</MenuItem>
                            <MenuItem value={"Fire service personnel"}>Fire service personnel</MenuItem>
                            <MenuItem value={"Law enforcement personnel"}>Law enforcement personnel</MenuItem>
                            <MenuItem value={"Other first responder"}>Other first responder</MenuItem>
                            <MenuItem value={"Ambulance Crew"}>Trauma</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {state.Witness_of_Seizure !== "Other" ? '' : (
                    <Grid item xs={12} md={4}>
                        <TextField
                            variant="filled"
                            size="small"
                            color="secondary"
                            label="Other"
                            name="S_Other"
                            value={state.S_Other}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                )}
                <Grid item xs={12} md={8}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="type-of-seizure-label">Type of Seizure</InputLabel>
                        <Select
                            labelId="type-of-seizure-label"
                            name="Type_of_Seizure"
                            value={state.Type_of_Seizure || ''}
                            onChange={handleChange}
                        >
                            <MenuItem value={"Grand Mal"}>Grand Mal</MenuItem>
                            <MenuItem value={"Petit Mal"}>Petit Mal</MenuItem>
                            <MenuItem value={"Focal"}>Focal</MenuItem>
                            <MenuItem value={"Jacksonian"}>Jacksonian</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {state.Type_of_Seizure !== "Other" ? '' : (
                    <Grid item xs={12} md={4}>
                        <TextField
                            variant="filled"
                            size="small"
                            color="secondary"
                            label="Other"
                            name="Type_Other"
                            value={state.Type_Other}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                )}
                <Grid item container xs={12} md={6} alignItems="center">
                    <Grid item container xs={12} spacing={3} alignItems="center">
                        <Grid item>
                            <Typography variant="subtitle1" gutterBottom>Seizure Duration</Typography>
                        </Grid>
                        <Grid item>
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="seizure duration"
                            >
                                <Button variant="contained" onClick={handleDurationIncrement}>+</Button>
                                <Button disabled classes={{
                                    root: classes.root, // class name, e.g. `root-x`
                                    disabled: classes.disabled, // class name, e.g. `disabled-x`
                                }}>
                                    {state.Seiz_Duration}
                                </Button>
                                <Button variant="contained" onClick={handleDurationDecrement}>-</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" gutterBottom>min</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={6} alignItems="center">
                    <Grid item container xs={12} spacing={3} alignItems="center">
                        <Grid item>
                            <Typography variant="subtitle1" gutterBottom>Number of Seizure(s)</Typography>
                        </Grid>
                        <Grid item>
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="number of seizure(s)"
                            >
                                <Button variant="contained" onClick={handleCountIncrement}>+</Button>
                                <Button disabled classes={{
                                    root: classes.root, // class name, e.g. `root-x`
                                    disabled: classes.disabled, // class name, e.g. `disabled-x`
                                }}>
                                    {state.No_of_Seizure}
                                </Button>
                                <Button variant="contained" onClick={handleCountDecrement}>-</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
                {/*  
            </Grid>
            <Grid item container xs={12} spacing={2}>
                <Grid item container xs={12} md={4} spacing={2} alignItems="center">
                    <Grid item>
                        <Typography>Seizure Duration</Typography>
                    </Grid>
                    <Grid item>
                        <FormControl
                            variant="outlined"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <OutlinedInput
                                id="seizure-duration"
                                name="Seiz_Duration"
                                type="number"
                                value={state.Seiz_Duration}
                                onChange={handleChange}
                                endAdornment={<InputAdornment position="end">min</InputAdornment>}
                                inputProps={{
                                    'aria-label': 'seizure duration',
                                }}
                                labelWidth={0}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={4} spacing={2} alignItems="center">
                    <Grid item>
                        <Typography>Number of Seizures</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            name="No_of_Seizure"
                            variant="outlined"
                            color="secondary"
                            type="number"
                            placeholder="0"
                            size="small"
                            value={state.No_of_Seizure}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </Grid> */}
            </Grid>
        </Container >

    )
}

export default Seizure
