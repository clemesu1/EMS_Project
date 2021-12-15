import { Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../features/cardiacArrest';

const witnesses = ["Ambulance crew", "Bystander", "Family / Friend", "Fire service personnel", "Law enforcement personnel", "Not witnessed", "Other", "Other first responder"];
const defibrillatorTypes = ["Unknown", "Monophasic", "Biphasic", "Manual", "Automated", "Semi-automated", "Other"];
const discontinuedReasons = ["Protocol", "Order via online medical control", "Unsafe scene", "DNR", "Other"];
const cprReasons = ["Obivious death protocol criteria met", "valid 'Do Not Resuscitate' order", "Delayed resuscitation access to a patient with confirmed vital signs absent", "Other"];
const pacemaker = ["No", "Unknown", "Pacemaker", "Implanted Defibrillator", "Other"]


const CardiacArrest = () => {
    const dispatch = useDispatch();
	const cardiacArrest = useSelector((state) => state.cardiacArrest.value)

    const handleChange = (e) => {
        dispatch(store({
			...cardiacArrest,
			[e.target.name]: e.target.value,
		}))
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <FormControl
                    variant="filled"
                    color="secondary"
                    size="small"
                    fullWidth
                >
                    <InputLabel id="arrest-class-label">Arrest Classification</InputLabel>
                    <Select
                        labelId="arrest-class-label"
                        id="arrest-class"
                        name="Arrest_Clarify"
                        value={cardiacArrest.Arrest_Clarify || ''}
                        onChange={handleChange}
                        label="Arrest Classification"
                    >
                        <MenuItem value={"Cardiac"}>Cardiac</MenuItem>
                        <MenuItem value={"Non-cardiac"}>Non-cardiac</MenuItem>
                        <MenuItem value={"Unknown"}>Unknown</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item container xs={12} sm={6} spacing={2}>
                <Grid item xs={12} sm={12}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="witness-of-arrest-label">Witness of Arrest</InputLabel>
                        <Select
                            labelId="witness-of-arrest-label"
                            id="witness-of-arrest"
                            name="Witness"
                            value={cardiacArrest.Witness || ''}
                            onChange={handleChange}
                            label="Witness of Arrest"
                        >
                            {witnesses.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                {cardiacArrest.Witness !== 'Other' ? '' :
                    <Grid item xs={12} sm={12}>
                        <TextField
                            label="Other"
                            variant="filled"
                            color="secondary"
                            size="small"
                            name="Witns_Other"
                            id="witness-other"
                            value={cardiacArrest.Witns_Other}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                }

            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl component="fieldset" color="secondary">
                    <FormLabel component="legend">Defibrillation prior to ambulance arrival</FormLabel>
                    <RadioGroup row aria-label="defibrillation prior to ambulance arrival" name="Defib_Prior_Ambul_arrival" value={cardiacArrest.Defib_Prior_Ambul_arrival} onChange={handleChange}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="No. of Defibrillator Prior EMS"
                    placeholder="0"
                    variant="filled"
                    color="secondary"
                    size="small"
                    type="number"
                    name="No_Defib_Prior_EMS"
                    id="no-defib-prior-ems"
                    value={cardiacArrest.No_Defib_Prior_EMS}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>

            <Grid item container xs={12} spacing={2} justifyContent="center">
                <Grid item container xs={12} sm={4} spacing={2}>
                    <Grid item xs={6} sm={6}>
                        <Button variant="contained" fullWidth onClick={() => {
                             dispatch(store({
                                ...cardiacArrest,
                                Spon_Circ: new Date().toLocaleTimeString('en-US'),
                            }))
                        }}>
                            Spont. Circulation
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            size="small"
                            name="Spon_Circ"
                            id="spon-circ"
                            value={cardiacArrest.Spon_Circ}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Button variant="contained" fullWidth onClick={() => {
                             dispatch(store({
                                ...cardiacArrest,
                                Spon_Respir: new Date().toLocaleTimeString('en-US'),
                            }))
                        }}>
                            Spont. Respiration
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            size="small"
                            name="Spon_Respir"
                            id="spon-respir"
                            value={cardiacArrest.Spon_Respir}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Button variant="contained" fullWidth onClick={() => {
                             dispatch(store({
                                ...cardiacArrest,
                                Time_of_First_CPR: new Date().toLocaleTimeString('en-US'),
                            }))
                        }}>
                            Time of First CPR
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            size="small"
                            name="Time_of_First_CPR"
                            id="time-of-first-cpr"
                            value={cardiacArrest.Time_of_First_CPR}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Button variant="contained" fullWidth onClick={() => {
                              dispatch(store({
                                ...cardiacArrest,
                                Time_of_Crew_CPR: new Date().toLocaleTimeString('en-US'),
                            }))
                        }}>
                            Time of Crew CPR
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            size="small"
                            name="Time_of_Crew_CPR"
                            id="time-of-crew-cpr"
                            value={cardiacArrest.Time_of_Crew_CPR}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>



                <Grid item container xs={12} sm={8} spacing={2} alignItems="center">
                    <Grid item xs={6} sm={6}>
                        <Button variant="contained" fullWidth onClick={() => {
                               dispatch(store({
                                ...cardiacArrest,
                                Time_first_Defib: new Date().toLocaleTimeString('en-US'),
                            }))
                        }}>
                            Time of first defibrillation
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            size="small"
                            name="Time_first_Defib"
                            id="time-first-defib"
                            value={cardiacArrest.Time_first_Defib}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Button variant="contained" fullWidth onClick={() => {
                              dispatch(store({
                                ...cardiacArrest,
                                Time_CPR_Discontinue: new Date().toLocaleTimeString('en-US'),
                            }))
                        }}>
                            Time of CPR Discontinued
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            size="small"
                            name="Time_CPR_Discontinue"
                            id="time-cpr-discontinue"
                            value={cardiacArrest.Time_CPR_Discontinue}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Button variant="contained" fullWidth onClick={() => {
                              dispatch(store({
                                ...cardiacArrest,
                                Pulse_rate_dest: new Date().toLocaleTimeString('en-US'),
                            }))
                        }}>
                            Pulse rate at destination
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            size="small"
                            name="Pulse_rate_dest"
                            id="pulse-rate-dest"
                            value={cardiacArrest.Pulse_rate_dest}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
                <FormControl
                    variant="filled"
                    color="secondary"
                    size="small"
                    fullWidth
                >
                    <InputLabel id="type-of-ambul-defib-label">Type of Ambulance Defibrillator</InputLabel>
                    <Select
                        labelId="type-of-ambul-defib-label"
                        id="type-of-ambul-defib"
                        name="Type_of_Ambul_Defib"
                        value={cardiacArrest.Type_of_Ambul_Defib || ''}
                        onChange={handleChange}
                        label="Type of Ambulance Defibrillator"
                    >
                        {defibrillatorTypes.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                {cardiacArrest.Type_of_Ambul_Defib !== 'Other' ? '' :
                    <TextField
                        label="Other"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="Typ_Amb_Defib_Other"
                        id="typ-amb-defib-other"
                        value={cardiacArrest.Typ_Amb_Defib_Other}
                        onChange={handleChange}
                        fullWidth
                    />
                }
            </Grid>
            <Grid item xs={12} sm={8}>
                <FormControl
                    variant="filled"
                    color="secondary"
                    size="small"
                    fullWidth
                >
                    <InputLabel id="reason-cpr-discontinue-label">Reason CPR Discontinued in the Field</InputLabel>
                    <Select
                        labelId="reason-cpr-discontinue-label"
                        id="reason-cpr-discontinue"
                        name="Reason_CPR_Discontinue"
                        value={cardiacArrest.Reason_CPR_Discontinue || ''}
                        onChange={handleChange}
                        label="Reason CPR Discontinued in the Field"
                    >
                        {discontinuedReasons.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                {cardiacArrest.Reason_CPR_Discontinue !== 'Other' ? '' :
                    <TextField
                        label="Other"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="CPR_Discon_Other"
                        id="cpr-discon-other"
                        value={cardiacArrest.CPR_Discon_Other}
                        onChange={handleChange}
                        fullWidth
                    />
                }
            </Grid>
            <Grid item xs={12} sm={8}>
                <FormControl
                    variant="filled"
                    color="secondary"
                    size="small"
                    fullWidth
                >
                    <InputLabel id="reason-not-init-cpr-label">Reason not initiating CPR</InputLabel>
                    <Select
                        labelId="reason-not-init-cpr-label"
                        id="reason-not-init-cpr"
                        name="Reason_not_Init_CPR"
                        value={cardiacArrest.Reason_not_Init_CPR || ''}
                        onChange={handleChange}
                        label="Reason not initiating CPR"
                    >
                        {cprReasons.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                {cardiacArrest.Reason_not_Init_CPR !== 'Other' ? '' :
                    <TextField
                        label="Other"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="NInit_CPR_Other"
                        id="n-init-cpr-other"
                        value={cardiacArrest.NInit_CPR_Other}
                        onChange={handleChange}
                        fullWidth
                    />
                }
            </Grid>
            <Grid item xs={12} sm={8}>
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
                        value={cardiacArrest.Pace_Implant_Defib || ''}
                        onChange={handleChange}
                        label="Pacemaker/Implant Defibrillator"
                    >
                        {pacemaker.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                {cardiacArrest.Pace_Implant_Defib !== 'Other' ? '' :
                    <TextField
                        label="Other"
                        variant="filled"
                        color="secondary"
                        size="small"
                        name="PImp_Defib_Other"
                        id="p-imp-defib-other"
                        value={cardiacArrest.PImp_Defib_Other}
                        onChange={handleChange}
                        fullWidth
                    />
                }
            </Grid>
        </Grid>
    )
}

export default CardiacArrest
