import 'date-fns';
import React from 'react'
import DateFnsUtils from '@date-io/date-fns';

import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const medications = ["ASA", "Atrovent", "Benadryl", "Dextrose 25%", "Dextrose 5%", "Dextrose 50%", "Diazepam", "Electrical Shock", "Epi-Pen Adult", "Epi-Pen Jr", "Epinephrine 1:1000", "Epinephrine 1:10000", "Fentanyl", "Glucagon", "Midazolam", "Morphine", "Narcan", "Nitroglycerine", "Oral Glucose", "Oxygen", "Ringers Lactate", "Sodium Chloride 0.9%", "Ventolin"];
const routes = ["Aerosol / Nebulizer Mask", "Bag valve - Mask/Tube", "Biphasic AED", "Biphasic Manual Defib", "Endotracheal", "High Concentration Mask", "Intramuscular", "Intranasal", "Intravenous", "MDI/Aerochamber", "Monophasic AED", "Monophasic Manual Defib", "Nasal Cannula", "Oral", "Other Mask/Device", "Pocket mask", "Rectal", "Simple Face Mask", "Subcutaneous", "Sublingual", "Topical", "Venturi Mask"];
const effectsOnPatient = ["No Change", "Signs and Symptoms Improved", "Signs and Symptoms Eliminated", "Deteriorated"];

const Medications = ({ state, setState }) => {
    const handleChange = (e) => {
        setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md lg={2} container alignItems="center">
                    <Typography>Medication Given At</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            autoOk
                            disableToolbar
                            variant="inline"
                            inputVariant="filled"
                            format="MM/dd/yyyy"
                            label="Date"
                            color="secondary"
                            size="small"
                            fullWidth
                            name="Medic_Given_Date"
                            value={state.Medic_Given_Date}
                            onChange={(date) => setState(prev => ({
                                ...prev,
                                Medic_Given_Date: date
                            }))}
                            InputLabelProps={{ shrink: true }}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        label="Time"
                        variant="filled"
                        color="secondary"
                        size="small"
                        type="time"
                        step="1"
                        name="Medic_Given_Time"
                        value={state.Medic_Given_Time}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} md={3} lg={2} container alignItems="center">
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            setState(prev => ({
                                ...prev,
                                Medic_Given_Date: new Date(),
                                Medic_Given_Time: (new Date()).getHours() + ':' + (new Date()).getMinutes(),
                            }))
                        }}
                    >
                        Medication Now
                    </Button>
                </Grid>
                <Grid item container xs={12} md={6}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="medic-given-label">Medication Given</InputLabel>
                        <Select
                            labelId="medic-given-label"
                            name="Medic_Given"
                            value={state.Medic_Given}
                            onChange={handleChange}
                        >
                            {medications.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6} md={3}>
                    <TextField
                        label="Amount"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="Medic_Amount"
                        value={state.Medic_Amount}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="medic-unit-label">Unit</InputLabel>
                        <Select
                            labelId="medic-unit-label"
                            name="Medic_Unit"
                            value={state.Medic_Unit || ''}
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
                <Grid item xs={12} md={6}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="route-label">Route</InputLabel>
                        <Select
                            labelId="route-label"
                            name="Route"
                            value={state.Route}
                            onChange={handleChange}
                        >
                            {routes.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="effect-on-patient-label">Effect on Patient</InputLabel>
                        <Select
                            labelId="effect-on-patient-label"
                            name="Effect_on_Patient"
                            value={state.Effect_on_Patient}
                            onChange={handleChange}
                        >
                            {effectsOnPatient.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Paramedic ID"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="Paramedic_ID"
                        value={state.Paramedic_ID}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Medications
