import React from 'react'
import { FormControl, FormControlLabel, Grid, InputAdornment, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(2),
        margin: 'auto',
    },
}));

const Seizure = (props) => {
    const { state, setState } = props;
    const classes = useStyles();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <Grid container spacing={3}>
            <Grid item container xs={12} spacing={2}>
                <Grid item container xs={5} spacing={2}>
                    <Grid item>
                        <Typography>Witnessed seizure</Typography>
                    </Grid>
                    <Grid item xs>
                        <Paper variant="outlined" className={classes.paper}>
                            <FormControl component="fieldset" color="secondary">
                                <RadioGroup row aria-label="witnessed seizure" name="Witnessed_Seizure" value={state.Witnessed_Seizure} onChange={handleChange}>
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={7} spacing={2} alignItems="center">
                    <Grid item xs={3}>
                        <Typography>Suspected cause of Seizure</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <FormControl
                            variant="outlined"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <Select
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
                    {state.Cause !== "Other" ? '' :
                        <>
                            <Grid item>
                                <Typography>Other</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    size="small"
                                    color="secondary"
                                    variant="outlined"
                                    fullWidth
                                    name="Cause_Other"
                                    value={state.Cause_Other}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </>
                    }
                </Grid>
            </Grid>
            <Grid item container xs={12} spacing={2} alignItems="center">
                <Grid item container xs={7} spacing={2} alignItems="center">
                    <Grid item>
                        <Typography>Witness of seizure</Typography>
                    </Grid>
                    <Grid item xs>
                        <FormControl
                            variant="outlined"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <Select
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
                </Grid>
                {state.Witness_of_Seizure !== "Other" ? '' :
                    <>
                        <Grid item>
                            <Typography>Other</Typography>
                        </Grid>
                        <Grid item xs>
                            <TextField
                                size="small"
                                color="secondary"
                                variant="outlined"
                                fullWidth
                                name="S_Other"
                                value={state.S_Other}
                                onChange={handleChange}
                            />
                        </Grid>
                    </>
                }
                <Grid item container xs={7} spacing={2} alignItems="center">
                    <Grid item>
                        <Typography>Type of seizure</Typography>
                    </Grid>
                    <Grid item xs>
                        <FormControl
                            variant="outlined"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <Select
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
                </Grid>
                {
                    state.Type_of_Seizure !== "Other" ? '' :
                        <>
                            <Grid item>
                                <Typography>Other</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    size="small"
                                    color="secondary"
                                    variant="outlined"
                                    fullWidth
                                    name="Type_Other"
                                    value={state.Type_Other}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </>
                }
            </Grid>
            <Grid item container xs={12} spacing={2}>
                <Grid item container xs={4} spacing={2} alignItems="center">
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
                <Grid item container xs={4} spacing={2} alignItems="center">
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
            </Grid>
        </Grid>
    )
}

export default Seizure
