import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(2),
        margin: 'auto',
    },
}));

const procedureTypes = ["None", "Airway cleared", "Airway patency", "Ventilation", "IV initiation", "Blood sle drawn", "Chest compressions", "Delivery", "Bleeding control", "Extremity immobilization", "Spinal immobilization", "MAST", "Emergency rapid extrication", "Physical restraint", "Other"];

const Interventions = ({ state, setState }) => {
    const classes = useStyles();

    const handleChange = (e) => {
        setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item container xs={12}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Procedure
                        </Typography>
                        <Grid item container xs={12} spacing={2} alignItems="flex-start">
                            <Grid item container xs={12} md={6} lg={4} spacing={1} >
                                <Grid item xs={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={() => {
                                            setState(prev => ({
                                                ...prev,
                                                Proc_Time_Start: new Date().toLocaleTimeString('en-US'),
                                            }))
                                        }}
                                    >
                                        Start Time
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        name="Proc_Time_Start"
                                        value={state.Proc_Time_Start}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={() => {
                                            setState(prev => ({
                                                ...prev,
                                                Proc_Time_End: new Date().toLocaleTimeString('en-US'),
                                            }))
                                        }}
                                    >
                                        End Time
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        name="Proc_Time_End"
                                        value={state.Proc_Time_End}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>

                            <Grid item container xs={12} md={6} lg={8} spacing={2}>
                                <Grid item xs={12} lg={6} >
                                    <FormControl
                                        variant="filled"
                                        color="secondary"
                                        size="small"
                                        fullWidth
                                    >
                                        <InputLabel id="procedure-label">Type of Procedure</InputLabel>
                                        <Select
                                            labelId="procedure-label"
                                            name="Procedur"
                                            value={state.Procedur}
                                            onChange={handleChange}
                                        >
                                            {procedureTypes.map((item, index) => (
                                                <MenuItem key={index} value={item}>{item}</MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    {state.Procedur !== "Other" ? '' : (
                                        <TextField
                                            label="Other"
                                            variant="filled"
                                            color="secondary"
                                            size="small"
                                            name="Proc_Other"
                                            id="proc-other"
                                            value={state.Proc_Other}
                                            onChange={handleChange}
                                            fullWidth
                                        />
                                    )}
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormControl
                                        variant="filled"
                                        color="secondary"
                                        size="small"
                                        fullWidth
                                    >
                                        <InputLabel id="device-method-label">Device/Method</InputLabel>
                                        <Select
                                            labelId="device-method-label"
                                            name="Device_Method"
                                            value={state.Device_Method}
                                            onChange={handleChange}
                                        >
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} spacing={2}>
                                <Grid item xs={12} md={6} lg={3}>
                                    <TextField
                                        variant="filled"
                                        color="secondary"
                                        size="small"
                                        name="Procedur_Technician"
                                        label="Technician ID"
                                        value={state.Procedur_Technician}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} md={6} lg={3}>
                                    <FormControl
                                        variant="filled"
                                        color="secondary"
                                        size="small"
                                        fullWidth
                                    >
                                        <InputLabel id="device-size-label">Device Size</InputLabel>
                                        <Select
                                            labelId="device-size-label"
                                            name="Device_Size"
                                            value={state.Device_Size}
                                            onChange={handleChange}
                                        >
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormControl
                                        variant="filled"
                                        color="secondary"
                                        size="small"
                                        fullWidth
                                    >
                                        <InputLabel id="outcome-label">Outcome</InputLabel>
                                        <Select
                                            labelId="outcome-label"
                                            name="Procedur_outcome"
                                            value={state.Procedur_outcome}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Stable"}>Stable</MenuItem>
                                            <MenuItem value={"Improved"}>Improved</MenuItem>
                                            <MenuItem value={"Deteriorated"}>Deteriorated</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormControl component="fieldset" color="secondary">
                                        <FormLabel component="legend">Successful</FormLabel>
                                        <RadioGroup row aria-label="successful" name="Procedur_Success" value={state.Procedur_Success} onChange={handleChange}>
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>
                <Grid item container xs={12}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Treatment
                        </Typography>
                        <Grid item container xs={12} spacing={2}>
                            <Grid item xs={12} md={6} lg={4}>
                                <TextField
                                    label="Technician ID"
                                    variant="filled"
                                    color="secondary"
                                    size="small"
                                    name="Treatment_technician"
                                    id="treatment-technician"
                                    value={state.Treatment_technician}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6} md={3} lg={2}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={() => {
                                        setState(prev => ({
                                            ...prev,
                                            Treat_Total_Time: new Date().toLocaleTimeString('en-US'),
                                        }))
                                    }}
                                >
                                    Total Time
                                </Button>
                            </Grid>
                            <Grid item xs={6} md={3} lg={2}>
                                <TextField
                                    variant="outlined"
                                    color="secondary"
                                    size="small"
                                    name="Treat_Total_Time"
                                    value={state.Treat_Total_Time}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item container xs={12} lg={4} spacing={1} alignItems="center">
                                <Grid item xs>
                                    <Typography>Dosage/Amount Unit</Typography>
                                </Grid>
                                <Grid item container xs spacing={1}>
                                    <Grid item xs>
                                        <TextField
                                            variant="filled"
                                            color="secondary"
                                            size="small"
                                            placeholder="0"
                                            id="substance-amount"
                                            value={state.Dosage_Amount}
                                            onChange={handleChange}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControl
                                            variant="filled"
                                            color="secondary"
                                            size="small"
                                            fullWidth
                                        >
                                            <Select
                                                id="dosage-unit"
                                                name="Dosage_Unit"
                                                value={state.Dosage_Unit || ''}
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="mcg">mcg</MenuItem>
                                                <MenuItem value="mg">mg</MenuItem>
                                                <MenuItem value="g">g</MenuItem>
                                                <MenuItem value="ml">ml</MenuItem>
                                                <MenuItem value="l">l</MenuItem>
                                                <MenuItem value="tablets">tablets</MenuItem>
                                                <MenuItem value="oz">oz</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} lg={6} spacing={2}>
                                <Grid item xs={12}>
                                    <FormControl
                                        variant="filled"
                                        color="secondary"
                                        size="small"
                                        fullWidth
                                    >
                                        <InputLabel id="type-of-treatment-label">Type of Treatment</InputLabel>
                                        <Select
                                            labelId="type-of-treatment-label"
                                            name="Treatment_Type"
                                            value={state.Treatment_Type}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="Medication">Medication</MenuItem>
                                            <MenuItem value="IV Fluid">IV Fluid</MenuItem>
                                            <MenuItem value="Oxygen">Oxygen</MenuItem>
                                            <MenuItem value="Defibrillation">Defibrillation</MenuItem>
                                            <MenuItem value="No Treatment">No Treatment</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl
                                        variant="filled"
                                        color="secondary"
                                        size="small"
                                        fullWidth
                                    >
                                        <InputLabel id="treatment-outcome-label">Treatment Outcome</InputLabel>
                                        <Select
                                            labelId="treatment-outcome-label"
                                            name="Treatment_Outcome"
                                            value={state.Treatment_Outcome}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="Unchanged">Unchanged</MenuItem>
                                            <MenuItem value="Improved">Improved</MenuItem>
                                            <MenuItem value="Deteriorated">Deteriorated</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} lg={6} spacing={2}>
                                <Grid item xs={12}>
                                    <FormControl
                                        variant="filled"
                                        color="secondary"
                                        size="small"
                                        fullWidth
                                    >
                                        <InputLabel id="admin-route-label">Administration Route</InputLabel>
                                        <Select
                                            labelId="admin-route-label"
                                            name="Admin_Route"
                                            value={state.Admin_Route}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="Something">Something</MenuItem>
                                            <MenuItem value="Other">Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    {state.Admin_Route !== "Other" ? '' : (
                                        <TextField
                                            label="Other"
                                            variant="filled"
                                            color="secondary"
                                            size="small"
                                            name="Adm_Rt_Other"
                                            id="adm-rt-other"
                                            value={state.Adm_Rt_Other}
                                            onChange={handleChange}
                                            fullWidth
                                        />
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

        </Container >

    )
}

export default Interventions
