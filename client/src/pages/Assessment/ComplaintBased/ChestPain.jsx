import { FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core'
import React from 'react'
import InputMask from "react-input-mask";

const qualityList = ["Aching", "Burning", "Cramping", "Crushing", "Dull", "General Discomfort", "Heavy", "No Pain", "Other", "Pressure", "Sharp", "Stabbing", "Tearing", "Throbbing", "Tight", "Undertermined"];
const painSources = ["Chest cardiac", "Chest respiratory", "Chest musculoskeletal", "Other"];
const radiationSites = ["No radiation / Localized", "Head / Neck", "Chest", "Abdomen", "Left arm", "Right arm", "Other"];
const onsetStates = ["Inactive", "Mild activity", "Intense activity", "Resting", "Sleeping", "Other"];
const pacemaker = ["No", "Unknown", "Pacemaker", "Implanted Defibrillator", "Other"];
const ChestPain = ({ state, setState }) => {

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <TextField
                    label="Pain Severity"
                    placeholder="0"
                    variant="filled"
                    color="secondary"
                    size="small"
                    type="number"
                    name="Pain_Severity"
                    id="pain-severity"
                    value={state.Pain_Severity}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={8}>
                <TextField
                    label="Name of the Pre-EMS Medication"
                    variant="filled"
                    color="secondary"
                    size="small"
                    name="Name_of_PreEMS_Medic"
                    id="name-of-pre-ems-medic"
                    value={state.Name_of_PreEMS_Medic}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item container xs={12} sm={6}>
                <FormControl component="fieldset" color="secondary">
                    <FormLabel component="legend">Self-Medication Administered</FormLabel>
                    <RadioGroup row aria-label="self-medication administered" name="Self_Medic_Admin" value={state.Self_Medic_Admin} onChange={handleChange}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl
                    variant="filled"
                    color="secondary"
                    size="small"
                    fullWidth
                >
                    <InputLabel id="response-to-medication-label">Response to Medication</InputLabel>
                    <Select
                        labelId="response-to-medication-label"
                        id="response-to-medication"
                        name="Response_to_Medic"
                        value={state.Response_to_Medic || ''}
                        onChange={handleChange}
                        label="Response to Medication"
                    >
                        <MenuItem value={"No Change"}>No Change</MenuItem>
                        <MenuItem value={"Signs and Symptoms Improved"}>Signs and Symptoms Improved</MenuItem>
                        <MenuItem value={"Signs and Symptoms Eliminated"}>Signs and Symptoms Eliminated</MenuItem>
                        <MenuItem value={"Deteriorated"}>Deteriorated</MenuItem>

                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <InputMask mask="99:99" value={state.OnSet} onChange={handleChange}>
                    <TextField
                        label="Onset"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="OnSet"
                        id="onset"
                        fullWidth
                    />
                </InputMask>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Provoked"
                    variant="filled"
                    color="secondary"
                    size="small"
                    name="Provoked"
                    id="provoked"
                    value={state.Provoked}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl
                    variant="filled"
                    color="secondary"
                    size="small"
                    fullWidth
                >
                    <InputLabel id="quality-label">Quality</InputLabel>
                    <Select
                        labelId="quality-label"
                        id="quality"
                        name="Quality"
                        value={state.Quality || ''}
                        onChange={handleChange}
                        label="Quality"
                    >
                        {qualityList.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                {state.Quality !== 'Other' ? '' :
                    <TextField
                        label="Other"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="Qty_Other"
                        id="qty-other"
                        value={state.Qty_Other}
                        onChange={handleChange}
                        fullWidth
                    />
                }
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl
                    variant="filled"
                    color="secondary"
                    size="small"
                    fullWidth
                >
                    <InputLabel id="source-of-pain-label">Source of Pain</InputLabel>
                    <Select
                        labelId="source-of-pain-label"
                        id="source-of-pain"
                        name="Source_of_Pain"
                        value={state.Source_of_Pain || ''}
                        onChange={handleChange}
                        label="Source of Pain"
                    >
                        {painSources.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                {state.Source_of_Pain !== 'Other' ? '' :
                    <TextField
                        label="Other"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="SPain_Other"
                        id="s-pain-other"
                        value={state.SPain_Other}
                        onChange={handleChange}
                        fullWidth
                    />
                }
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl
                    variant="filled"
                    color="secondary"
                    size="small"
                    fullWidth
                >
                    <InputLabel id="pain-radiation-site-label">Pain Radiation Site</InputLabel>
                    <Select
                        labelId="pain-radiation-site-label"
                        id="pain-radiation-site"
                        name="Pain_radiation_site"
                        value={state.Pain_radiation_site || ''}
                        onChange={handleChange}
                        label="Pain Radiation Site"
                    >
                        {radiationSites.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                {state.Pain_radiation_site !== 'Other' ? '' :
                    <TextField
                        label="Other"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="PRSite_Other"
                        id="p-r-site-other"
                        value={state.PRSite_Other}
                        onChange={handleChange}
                        fullWidth
                    />
                }
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl
                    variant="filled"
                    color="secondary"
                    size="small"
                    fullWidth
                >
                    <InputLabel id="state-at-onsite-label">State at Onset</InputLabel>
                    <Select
                        labelId="state-at-onsite-label"
                        id="state-at-onsite"
                        name="State_at_Onset"
                        value={state.State_at_Onset || ''}
                        onChange={handleChange}
                        label="State at Onset"
                    >
                        {onsetStates.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                {state.State_at_Onset !== 'Other' ? '' :
                    <TextField
                        label="Other"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="SOnset_Other"
                        id="s-onset-other"
                        value={state.SOnset_Other}
                        onChange={handleChange}
                        fullWidth
                    />
                }
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl
                    variant="filled"
                    color="secondary"
                    size="small"
                    fullWidth
                >
                    <InputLabel id="pace-implant-defib-label">Pacemaker/Implant Defibrillator</InputLabel>
                    <Select
                        labelId="pace-implant-defib-label"
                        id="pace-implant-defib"
                        name="Pace_Implant_Defib"
                        value={state.Pace_Implant_Defib || ''}
                        onChange={handleChange}
                        label="Pacemaker/Implant Defibrillator"
                    >
                        {pacemaker.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                {state.Pace_Implant_Defib !== 'Other' ? '' :
                    <TextField
                        label="Other"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="PIDefib_Other"
                        id="p-i-defib-other"
                        value={state.PIDefib_Other}
                        onChange={handleChange}
                        fullWidth
                    />
                }
            </Grid>
        </Grid>
    )
}

export default ChestPain
