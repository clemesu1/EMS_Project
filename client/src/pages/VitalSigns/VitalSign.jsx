import React from 'react'
import 'date-fns';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(2),
        margin: 'auto',
    },
}));

const heartSites = ["Radial", "Brachial", "Femoral", "Carotid", "Pedal", "Apical", "Other"];
const cardiacRhythms = ["Normal Sinus Rhythm", "Sinus Bradycardia", "Sinus Tachycardia", "Agonal", "Artifact", "Atrial Fibrillation/ Flutter", "AV Block (1st degree)", "AV Block (2nd degree)", "AV Block (3rd degree)", "Junctional", "Bundle Branch Block", "Paced Rhythm", "PACs", "PVCs", "Sinus Dysrhythmia", "SVT", "V-fibrillation", "V-tachycardia", "Unknown", "Other"];
const glucoseValues = ["0.0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "3.0", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "4.0", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "5.0", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "6.0", "6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7", "6.8", "6.9", "7.0", "7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7", "7.8", "7.9", "8.0", "8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7", "8.8", "8.9", "9.0", "9.1", "9.2", "9.3", "9.4", "9.5", "9.6", "9.7", "9.8", "9.9", "10.0", "10.1", "10.2", "10.3", "10.4", "10.5", "10.6", "10.7", "10.8", "10.9", "11.0", "11.1", "11.2", "11.3", "11.4", "11.5", "11.6", "11.7", "11.8", "11.9", "12.0", "12.1", "12.2", "12.3", "12.4", "12.5", "12.6", "12.7", "12.8", "12.9", "13.0", "13.1", "13.2", "13.3", "13.4", "13.5", "13.6", "13.7", "13.8", "13.9", "14.0", "14.1", "14.2", "14.3", "14.4", "14.5", "14.6", "14.7", "14.8", "14.9", "15.0", "15.1", "15.2", "15.3", "15.4", "15.5", "15.6", "15.7", "15.8", "15.9", "16.0", "16.1", "16.2", "16.3", "16.4", "16.5", "16.6", "16.7", "16.8", "16.9", "17.0", "17.1", "17.2", "17.3", "17.4", "17.5", "17.6", "17.7", "17.8", "17.9", "18.0", "18.1", "18.2", "18.3", "18.4", "18.5", "18.6", "18.7", "18.8", "18.9", "19.0", "19.1", "19.2", "19.3", "19.4", "19.5", "19.6", "19.7", "19.8", "19.9", "20.0", "20.1", "20.2", "20.3", "20.4", "20.5", "20.6", "20.7", "20.8", "20.9", "21.0", "21.1", "21.2", "21.3", "21.4", "21.5", "21.6", "21.7", "21.8", "21.9", "22.0", "22.1", "22.2", "22.3", "22.4", "22.5", "22.6", "22.7", "22.8", "22.9", "23.0", "23.1", "23.2", "23.3", "23.4", "23.5", "23.6", "23.7", "23.8", "23.9", "24.0", "24.1", "24.2", "24.3", "24.4", "24.5", "24.6", "24.7", "24.8", "24.9", "25.0", "25.1", "25.2", "25.3", "25.4", "25.5", "25.6", "25.7", "25.8", "25.9", "26.0", "26.1", "26.2", "26.3", "26.4", "26.5", "26.6", "26.7", "26.8", "26.9", "27.0", "27.1", "27.2", "27.3", "27.4", "27.5", "27.6", "27.7", "27.8", "27.9", "28.0", "28.1", "28.2", "28.3", "28.4", "28.5", "28.6", "28.7", "28.8", "28.9", "29.0", "29.1", "29.2", "29.3", "29.4", "29.5", "29.6", "29.7", "29.8", "29.9", "30.0", "30.1", "30.2", "30.3", "30.4", "30.5", "30.6", "30.7", "30.8", "30.9", "31.0", "31.1", "31.2", "31.3", "31.4", "31.5", "31.6", "31.7", "31.8", "31.9", "32.0", "32.1", "32.2", "32.3", "32.4", "32.5", "32.6", "32.7", "32.8", "32.9", "33.0", "33.1", "33.2", "33.3", "33.4", "33.5", "33.6", "33.7", "33.8", "33.9", "34.0", "34.1", "34.2", "34.3", "34.4", "34.5", "34.6", "34.7", "34.8", "34.9", "35.0", "35.1", "35.2", "35.3", "35.4", "35.5", "35.6", "35.7", "35.8", "35.9", "36.0", "36.1", "36.2", "36.3", "36.4", "36.5", "36.6", "36.7", "36.8", "36.9", "37.0", "37.1", "37.2", "37.3", "37.4", "37.5", "37.6", "37.7", "37.8", "37.9", "38.0", "38.1", "38.2", "38.3", "38.4", "38.5", "38.6", "38.7", "38.8", "38.9", "39.0", "39.1", "39.2", "39.3", "39.4", "39.5", "39.6", "39.7", "39.8", "39.9", "40.0"];
const glascowEyeValues = ["4, Spontaneously", "3, To verbal command", "2, To Pain", "1, No response"];
const glascowVerbalValues = ["5, Oriented and Converses", "4, Disoriented and Converses", "3, Inappropriate Words", "2, Incomprehensible Sounds", "1, No Response"];
const glascowMotorValues = ["6, Obeys", "5, Localize Pain", "4, Flexion (Withdrawal)", "3, Flexion (Abnormal - Decorticate Rigidity)", "2, Extension (Decerebrate Rigidity)", "1, No Response"];
const skinColors = ["Cyanotic", "Normal ", "Pale", "Pink", "Red"];
const skinTemps = ["Cool", "Normal", "Warm"];
const skinMoistures = ["Diaphoretic", "Dry", "Moist"];
const vitalsTemps = ["30.0", "30.1", "30.2", "30.3", "30.4", "30.5", "30.6", "30.7", "30.8", "30.9", "31.0", "31.1", "31.2", "31.3", "31.4", "31.5", "31.6", "31.7", "31.8", "31.9", "32.0", "32.1", "32.2", "32.3", "32.4", "32.5", "32.6", "32.7", "32.8", "32.9", "33.0", "33.1", "33.2", "33.3", "33.4", "33.5", "33.6", "33.7", "33.8", "33.9", "34.0", "34.1", "34.2", "34.3", "34.4", "34.5", "34.6", "34.7", "34.8", "34.9", "35.0", "35.1", "35.2", "35.3", "35.4", "35.5", "35.6", "35.7", "35.8", "35.9", "36.0", "36.1", "36.2", "36.3", "36.4", "36.5", "36.6", "36.7", "36.8", "36.9", "37.0", "37.1", "37.2", "37.3", "37.4", "37.5", "37.6", "37.7", "37.8", "37.9", "38.0", "38.1", "38.2", "38.3", "38.4", "38.5", "38.6", "38.7", "38.8", "38.9", "39.0", "39.1", "39.2", "39.3", "39.4", "39.5", "39.6", "39.7", "39.8", "39.9", "40.0", "40.1", "40.2", "40.3", "40.4", "40.5", "40.6", "40.7", "40.8", "40.9", "41.0", "41.1", "41.2", "41.3", "41.4", "41.5", "41.6", "41.7", "41.8", "41.9", "42.0", "42.1", "42.2", "42.3", "42.4", "42.5", "42.6", "42.7", "42.8", "42.9", "43.0", "43.1", "43.2", "43.3", "43.4", "43.5", "43.6", "43.7", "43.8", "43.9", "44.0", "44.1", "44.2", "44.3", "44.4", "44.5", "44.6", "44.7", "44.8", "44.9", "45.0", "45.1", "45.2", "45.3", "45.4", "45.5", "45.6", "45.7", "45.8", "45.9", "46.0", "46.1", "46.2", "46.3", "46.4", "46.5", "46.6", "46.7", "46.8", "46.9", "47.0", "47.1", "47.2", "47.3", "47.4", "47.5", "47.6", "47.7", "47.8", "47.9", "48.0", "48.1", "48.2", "48.3", "48.4", "48.5", "48.6", "48.7", "48.8", "48.9", "49.0", "49.1", "49.2", "49.3", "49.4", "49.5", "49.6", "49.7", "49.8", "49.9", "50.0"];
const vitalsTempSites = ["Oral", "Rectal", "Tympanic", "Axilla"];
const LOCs = ["Alert", "Verbal", "Painful", "Unresponsive"];

const VitalSign = ({ state, setState }) => {
    const classes = useStyles();

    const handleChange = (e) => {
        setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} >
                <Grid item xs={12} md lg={2} container alignItems="center">
                    <Typography>Vitals Taken At</Typography>
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
                            name="Vitals_Date"
                            value={state.Vitals_Date}
                            onChange={(date) => setState(prev => ({
                                ...prev,
                                Vitals_Date: date
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
                        name="Vitals_Time"
                        value={state.Vitals_Time}
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
                                Vitals_Date: new Date(),
                                Vitals_Time: (new Date()).getHours() + ':' + (new Date()).getMinutes(),
                            }))
                        }}
                    >
                        Vitals Now
                    </Button>
                </Grid>

                <Grid item container xs={12} md={8}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            The Heart
                        </Typography>
                        <Grid item container xs={12} spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <FormControl
                                    variant="filled"
                                    color="secondary"
                                    size="small"
                                    fullWidth
                                >
                                    <InputLabel id="heart-rate-label">Rate</InputLabel>
                                    <Select
                                        labelId="heart-rate-label"
                                        name="Heart_Rate"
                                        value={state.Heart_Rate}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={0}>0</MenuItem>
                                        {(Array(161).fill().map((element, index) => index + 40)).map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl
                                    variant="filled"
                                    color="secondary"
                                    size="small"
                                    fullWidth
                                >
                                    <InputLabel id="heart-site-label">Site</InputLabel>
                                    <Select
                                        labelId="heart-site-label"
                                        name="Heart_Site"
                                        value={state.Heart_Site}
                                        onChange={handleChange}
                                    >
                                        {heartSites.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            {state.Heart_Site !== "Other" ? '' : (
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        label="Other"
                                        variant="filled"
                                        color="secondary"
                                        size="small"
                                        name="Heart_Site_Oth"
                                        value={state.Heart_Site_Oth}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                            )}
                            <Grid item xs={12} sm={8}>
                                <FormControl
                                    variant="filled"
                                    color="secondary"
                                    size="small"
                                    fullWidth
                                >
                                    <InputLabel id="cardiac-rhythm-label">Cardiac Rhythm</InputLabel>
                                    <Select
                                        labelId="cardiac-rhythm-label"
                                        name="Card_Rhyth"
                                        value={state.Card_Rhyth}
                                        onChange={handleChange}
                                    >
                                        {cardiacRhythms.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {state.Card_Rhyth !== "Other" ? '' : (
                                    <TextField
                                        label="Other"
                                        variant="filled"
                                        color="secondary"
                                        size="small"
                                        name="Card_Rhyth_Oth"
                                        value={state.Card_Rhyth_Oth}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                )}
                            </Grid>
                            <Grid item container xs={12} sm={2} alignItems="center">
                                <Typography>Blood Pressure</Typography>
                            </Grid>
                            <Grid item xs={5} sm={4}>
                                <FormControl
                                    variant="filled"
                                    color="secondary"
                                    size="small"
                                    fullWidth
                                >
                                    <InputLabel id="bp-systolic-label">Systolic</InputLabel>
                                    <Select
                                        labelId="bp-systolic-label"
                                        name="BP_Sys"
                                        value={state.BP_Sys}
                                        onChange={handleChange}
                                    >
                                        {[...Array(251).keys()].map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2} sm={1} container alignItems="center" justifyContent="center">
                                <Typography variant="h6">/</Typography>
                            </Grid>
                            <Grid item xs={5} sm={4}>
                                <FormControl
                                    variant="filled"
                                    color="secondary"
                                    size="small"
                                    fullWidth
                                >
                                    <InputLabel id="bp-diastolic-label">Diastolic</InputLabel>
                                    <Select
                                        labelId="bp-diastolic-label"
                                        name="BP_Dia"
                                        value={state.BP_Dia}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"Palp"}>Palp</MenuItem>
                                        {[...Array(251).keys()].map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container xs={12} md={4} alignItems="center">
                    <Grid item xs={12}>
                        <FormControl
                            variant="filled"
                            color="secondary"
                            size="small"
                            margin="normal"
                            fullWidth
                        >
                            <InputLabel id="resp-rate-label">Respiration Rate</InputLabel>
                            <Select
                                labelId="resp-rate-label"
                                name="Resp_Rate"
                                value={state.Resp_Rate}
                                onChange={handleChange}
                            >
                                {[...Array(61).keys()].map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl
                            variant="filled"
                            color="secondary"
                            size="small"
                            margin="normal"
                            fullWidth
                        >
                            <InputLabel id="oxy-sat-label">Oxygen Saturation</InputLabel>
                            <Select
                                labelId="oxy-sat-label"
                                name="Oxy_Sat"
                                value={state.Oxy_Sat}
                                onChange={handleChange}
                            >
                                {[...Array(101).keys()].map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl
                            variant="filled"
                            color="secondary"
                            size="small"
                            margin="normal"
                            fullWidth
                        >
                            <InputLabel id="glucose-label">Glucose</InputLabel>
                            <Select
                                labelId="glucose-label"
                                name="Glucose"
                                value={state.Glucose}
                                onChange={handleChange}
                            >
                                {glucoseValues.map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={6} lg={5}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Glascow Coma
                        </Typography>
                        <Grid item container xs={12} spacing={2}>
                            <Grid item xs={12}>
                                <FormControl
                                    variant="filled"
                                    color="secondary"
                                    size="small"
                                    fullWidth
                                >
                                    <InputLabel id="glascow-eye-label">Eye</InputLabel>
                                    <Select
                                        labelId="glascow-eye-label"
                                        name="Glascow_Eye"
                                        value={state.Glascow_Eye}
                                        onChange={handleChange}
                                    >
                                        {glascowEyeValues.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
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
                                    <InputLabel id="glascow-verbal-label">Verbal</InputLabel>
                                    <Select
                                        labelId="glascow-verbal-label"
                                        name="Glascow_Verbal"
                                        value={state.Glascow_Verbal}
                                        onChange={handleChange}
                                    >
                                        {glascowVerbalValues.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
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
                                    <InputLabel id="glascow-motor-label">Motor</InputLabel>
                                    <Select
                                        labelId="glascow-motor-label"
                                        name="Glascow_Motor"
                                        value={state.Glascow_Motor}
                                        onChange={handleChange}
                                    >
                                        {glascowMotorValues.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item container xs={12} md={6} lg={4}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Skin
                        </Typography>
                        <Grid item container xs={12} spacing={2}>
                            <Grid item xs={12}>
                                <FormControl
                                    variant="filled"
                                    color="secondary"
                                    size="small"
                                    fullWidth
                                >
                                    <InputLabel id="skin-color-label">Color</InputLabel>
                                    <Select
                                        labelId="skin-color-label"
                                        name="Skin_Color"
                                        value={state.Skin_Color}
                                        onChange={handleChange}
                                    >
                                        {skinColors.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
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
                                    <InputLabel id="skin-temp-label">Temperature</InputLabel>
                                    <Select
                                        labelId="skin-temp-label"
                                        name="Skin_Temp"
                                        value={state.Skin_Temp}
                                        onChange={handleChange}
                                    >
                                        {skinTemps.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
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
                                    <InputLabel id="skin-moisture-label">Moisture</InputLabel>
                                    <Select
                                        labelId="skin-moisture-label"
                                        name="Skin_Moisture"
                                        value={state.Skin_Moisture}
                                        onChange={handleChange}
                                    >
                                        {skinMoistures.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container xs={12} lg={3} >
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Temperature
                        </Typography>
                        <Grid item container xs={12}>

                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                margin="normal"
                                fullWidth
                            >
                                <InputLabel id="vital-temp-label">Temperature</InputLabel>
                                <Select
                                    labelId="vital-temp-label"
                                    name="VT_Temp"
                                    value={state.VT_Temp}
                                    onChange={handleChange}
                                >
                                    {vitalsTemps.map((item, index) => (
                                        <MenuItem key={index} value={item}>{item}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item container xs={12}>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                margin="normal"
                                fullWidth
                            >
                                <InputLabel id="vital-temp-site-label">Site of Temperature</InputLabel>
                                <Select
                                    labelId="vital-temp-site-label"
                                    name="VT_Temp_Site"
                                    value={state.VT_Temp_Site}
                                    onChange={handleChange}
                                >
                                    {vitalsTempSites.map((item, index) => (
                                        <MenuItem key={index} value={item}>{item}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="vitals-loc-label">Level of Consciousness</InputLabel>
                        <Select
                            labelId="vitals-loc-label"
                            name="LOC"
                            value={state.LOC}
                            onChange={handleChange}
                        >
                            {LOCs.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container >
    )
}


export default VitalSign
