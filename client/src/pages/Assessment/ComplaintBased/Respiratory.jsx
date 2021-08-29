import { Checkbox, FormControl, FormLabel, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Slider, TextField, Typography, Container, Box } from '@material-ui/core'
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

const Respiratory = (props) => {
    const { state, setState, breath, setBreath } = props;

    const classes = useStyles();


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleCheckboxChange = (e) => {
        const newData = [...breath];

        const index = newData.findIndex(item => item.value === e.target.name)

        newData[index].checked = e.target.checked;

        setBreath(newData)

        const dataList = breath.filter(obj => obj.checked === true).map(obj => obj.label)

        setState({
            ...state,
            Breath_sound_II: dataList
        })

    }

    const handleSliderChange = (e, newValue) => {
        setState({
            ...state,
            Pain_Scale: newValue,
        })
    }

    return (
        <Container maxWidth="xl">

            <Grid container spacing={3}>

                <Grid item container xs={12} sm={4} md={3} >
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Level of Distress
                        </Typography>
                        <Grid item container xs={12} spacing={2} alignItems="center">
                            <Box p={3}>
                                <FormControl component="fieldset" color="secondary">
                                    <RadioGroup row aria-label="level of distress" name="Level_of_distress" value={state.Level_of_distress} onChange={handleChange}>
                                        <FormControlLabel value="Mild" control={<Radio />} label="Mild" />
                                        <FormControlLabel value="Moderate" control={<Radio />} label="Moderate" />
                                        <FormControlLabel value="Severe" control={<Radio />} label="Severe" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Paper>

                </Grid>
                <Grid item container xs={12} sm={8} md={5} >
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Breath Sound Checks
                        </Typography>
                        <Grid item container xs={12} spacing={2} alignItems="center">
                            <Grid item xs={4}>
                                <Box p={3}>
                                    <FormControl component="fieldset" color="secondary">
                                        <RadioGroup aria-label="breath sound I" name="Breath_sound_I" value={state.Breath_sound_I} onChange={handleChange}>
                                            <FormControlLabel value="Equal" control={<Radio />} label="Equal" />
                                            <FormControlLabel value="Clear" control={<Radio />} label="Clear" />
                                            <FormControlLabel value="Unequal" control={<Radio />} label="Unequal" />
                                            <FormControlLabel value="Noisy" control={<Radio />} label="Noisy" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box p={3}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            {breath.slice(0, 3).map((item, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    label={item.label}
                                                    control={
                                                        <Checkbox
                                                            key={index}
                                                            checked={item.checked || false}
                                                            value={item.value}
                                                            onChange={(e) => handleCheckboxChange(e)}
                                                            name={item.value}
                                                        />
                                                    }
                                                />
                                            ))}
                                        </FormGroup>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box p={3}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            {breath.slice(3, 7).map((item, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    label={item.label}
                                                    control={
                                                        <Checkbox
                                                            key={index}
                                                            checked={item.checked || false}
                                                            value={item.value}
                                                            onChange={(e) => handleCheckboxChange(e)}
                                                            name={item.value}
                                                        />
                                                    }
                                                />
                                            ))}
                                        </FormGroup>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container xs={12} md={4} spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Pre-EMS medication"
                            size="small"
                            color="secondary"
                            variant="filled"
                            fullWidth
                            multiline
                            rows={3}
                            maxRows={3}
                            name="PreEMS_Medication"
                            value={state.PreEMS_Medication}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item container xs={12}>
                        <Paper variant="outlined" className={classes.paper}>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                            >
                                Response to Pre-EMS Med
                            </Typography>
                            <Grid item container xs={12} spacing={2} alignItems="center">
                                <Box p={3}>
                                    <FormControl component="fieldset" color="secondary">
                                        <RadioGroup row aria-label="response to pre-ems med" name="Response_to_Medic" value={state.Response_to_Medic} onChange={handleChange}>
                                            <FormControlLabel value="Improved" control={<Radio />} label="Improved" />
                                            <FormControlLabel value="Unchanged" control={<Radio />} label="Unchanged" />
                                            <FormControlLabel value="Deteriorated" control={<Radio />} label="Deteriorated" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={12} spacing={2}>

                    <Grid item xs={12} sm={6}>
                        <FormControl
                            variant="filled"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <InputLabel id="coughing-label">Coughing</InputLabel>
                            <Select
                                labelId="coughing-label"
                                name="Coughing"
                                value={state.Coughing || ''}
                                onChange={handleChange}
                            >
                                <MenuItem value={"No cough"}>No cough</MenuItem>
                                <MenuItem value={"Productive (with phlegm)"}>Productive (with phlegm)</MenuItem>
                                <MenuItem value={"Non-productive (no phlegm)"}>Non-productive (no phlegm)</MenuItem>
                                <MenuItem value={"Not noted"}>Not noted</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            variant="filled"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <InputLabel id="pain-scale-label">Pain Scale</InputLabel>
                            <Select
                                labelId="pain-scale-label"
                                name="Pain_Scale"
                                value={state.Pain_Scale || ''}
                                onChange={handleChange}
                            >
                                {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item container xs={12} sm={6} md={3} >
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Tobacco
                        </Typography>
                        <Grid item container xs={12} spacing={2} alignItems="center">
                            <Box p={3}>
                                <FormControl component="fieldset" color="secondary">
                                    <RadioGroup row aria-label="tobacco" name="Tobacco" value={state.Tobacco} onChange={handleChange}>
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                        <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container xs={12} sm={6} md={4}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Allergen Exposure
                        </Typography>
                        <Grid item container xs={12} spacing={2} alignItems="center">
                            <Box p={3}>
                                <FormControl component="fieldset" color="secondary">
                                    <RadioGroup row aria-label="allergen exposure" name="Allerg_Exposure" value={state.Allerg_Exposure} onChange={handleChange}>
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                        <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container xs={12} sm={6} md={5}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Medication Administered
                        </Typography>
                        <Grid item container xs={12} spacing={2} alignItems="center">
                            <Box p={3}>
                                <FormControl component="fieldset" color="secondary">
                                    <RadioGroup row aria-label="medication administered" name="Medication_Admin" value={state.Medication_Admin} onChange={handleChange}>
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                        <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container xs={12} sm={6} md={3}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            JVD
                        </Typography>
                        <Grid item container xs={12} spacing={2} alignItems="center">
                            <Box p={3}>
                                <FormControl component="fieldset" color="secondary">
                                    <RadioGroup row aria-label="jvd" name="JVD" value={state.JVD} onChange={handleChange}>
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                        <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container xs={12} sm={6} md={4} >
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Peripheral Edema
                        </Typography>
                        <Grid item container xs={12} spacing={2} alignItems="center">
                            <Box p={3}>
                                <FormControl component="fieldset" color="secondary">
                                    <RadioGroup row aria-label="peripheral edema" name="Periph_Edema" value={state.Periph_Edema} onChange={handleChange}>
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                        <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container xs={12} sm={6} md={5}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Accessory Muscle Use
                        </Typography>
                        <Grid item container xs={12} spacing={2} alignItems="center">
                            <Box p={3}>
                                <FormControl component="fieldset" color="secondary">
                                    <RadioGroup row aria-label="accessory muscle use" name="Acc_Mus_Use" value={state.Acc_Mus_Use} onChange={handleChange}>
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                        <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
            {/* 
          
                <Grid item container xs={12} spacing={2}>
                    <Grid item container xs={11} spacing={2}>
                        <Grid item container xs={12} spacing={2}>
                            <Grid item container xs={3}>
                                <Paper variant="outlined" className={classes.paper}>
                                    <Grid item container justifyContent="center">
                                        <FormControl component="fieldset" color="secondary">
                                            <FormLabel component="legend">Tobacco</FormLabel>
                                            <RadioGroup aria-label="tobacco" name="Tobacco" value={state.Tobacco} onChange={handleChange}>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item container xs={4}>
                                <Paper variant="outlined" className={classes.paper}>
                                    <Grid item container justifyContent="center">
                                        <FormControl component="fieldset" color="secondary">
                                            <FormLabel component="legend">Allergen Exposure</FormLabel>
                                            <RadioGroup aria-label="allergen exposure" name="Allerg_Exposure" value={state.Allerg_Exposure} onChange={handleChange}>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item container xs={5}>
                                <Paper variant="outlined" className={classes.paper}>
                                    <Grid item container justifyContent="center">
                                        <FormControl component="fieldset" color="secondary">
                                            <FormLabel component="legend">Medication administered</FormLabel>
                                            <RadioGroup aria-label="medication administered" name="Medication_Admin" value={state.Medication_Admin} onChange={handleChange}>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>

                        <Grid item container xs={12} spacing={2}>
                            <Grid item container xs={12} md={3}>
                                <Paper variant="outlined" className={classes.paper}>
                                    <Grid item container justifyContent="center">
                                        <FormControl component="fieldset" color="secondary">
                                            <FormLabel component="legend">JVD</FormLabel>
                                            <RadioGroup aria-label="jvd" name="JVD" value={state.JVD} onChange={handleChange}>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item container xs={12} md={4}>
                                <Paper variant="outlined" className={classes.paper}>
                                    <Grid item container justifyContent="center">
                                        <FormControl component="fieldset" color="secondary">
                                            <FormLabel component="legend">Peripheral Edema</FormLabel>
                                            <RadioGroup aria-label="peripheral edema" name="Periph_Edema" value={state.Periph_Edema} onChange={handleChange}>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item container xs={12} md={5}>
                                <Paper variant="outlined" className={classes.paper}>
                                    <Grid item container justifyContent="center">
                                        <FormControl component="fieldset" color="secondary">
                                            <FormLabel component="legend">Accessory Muscle Use</FormLabel>
                                            <RadioGroup aria-label="accessory muscle use" name="Acc_Mus_Use" value={state.Acc_Mus_Use} onChange={handleChange}>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={2} md={1} spacing={2} direction="column" alignItems="center">
                        <Grid item>
                            <Typography id="discrete-slider-small-steps" gutterBottom>Pain Scale</Typography>
                        </Grid>
                        <Grid item xs>
                            <Slider
                                orientation="vertical"
                                reverse
                                color="primary"
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider-small-steps"
                                marks
                                min={0}
                                max={10}
                                valueLabelDisplay="auto"
                                name="Pain_Scale"
                                value={state.Pain_Scale}
                                onChange={handleSliderChange}
                            >

                            </Slider>
                            {/* <FormControl
                            variant="outlined"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <Select
                                name="Pain_Scale"
                                value={state.Pain_Scale || ''}
                                onChange={handleChange}
                            >
                                {
                                    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((item, index) => (
                                        <MenuItem key={index} value={item}>{item}</MenuItem>
                                    ))
                                }

                            </Select>
                        </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}
        </Container>
    )
}

function valuetext(value) {
    return `${value}`;
}


export default Respiratory
