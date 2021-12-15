import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography, Container, Box } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../features/respiratory';


const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(2),
        margin: 'auto',
    },
}));

const Respiratory = (props) => {
    const { breath, setBreath } = props;

    const classes = useStyles();
    const dispatch = useDispatch();
	const respiratory = useSelector((state) => state.respiratory.value)


    const handleChange = (e) => {
        dispatch(store({
			...respiratory,
			[e.target.name]: e.target.value,
		}))
    }

    const handleCheckboxChange = (e) => {
        const newData = [...breath];

        const index = newData.findIndex(item => item.value === e.target.name)

        newData[index].checked = e.target.checked;

        setBreath(newData)

        const dataList = breath.filter(obj => obj.checked === true).map(obj => obj.label)

        dispatch(store({
			...respiratory,
            Breath_sound_II: dataList
        }))

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
                                    <RadioGroup row aria-label="level of distress" name="Level_of_distress" value={respiratory.Level_of_distress} onChange={handleChange}>
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
                                        <RadioGroup aria-label="breath sound I" name="Breath_sound_I" value={respiratory.Breath_sound_I} onChange={handleChange}>
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
                            minRows={3}
                            maxRows={3}
                            name="PreEMS_Medication"
                            value={respiratory.PreEMS_Medication}
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
                                        <RadioGroup row aria-label="response to pre-ems med" name="Response_to_Medic" value={respiratory.Response_to_Medic} onChange={handleChange}>
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
                                value={respiratory.Coughing || ''}
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
                                value={respiratory.Pain_Scale || ''}
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
                                    <RadioGroup row aria-label="tobacco" name="Tobacco" value={respiratory.Tobacco} onChange={handleChange}>
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
                                    <RadioGroup row aria-label="allergen exposure" name="Allerg_Exposure" value={respiratory.Allerg_Exposure} onChange={handleChange}>
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
                                    <RadioGroup row aria-label="medication administered" name="Medication_Admin" value={respiratory.Medication_Admin} onChange={handleChange}>
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
                                    <RadioGroup row aria-label="jvd" name="JVD" value={respiratory.JVD} onChange={handleChange}>
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
                                    <RadioGroup row aria-label="peripheral edema" name="Periph_Edema" value={respiratory.Periph_Edema} onChange={handleChange}>
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
                                    <RadioGroup row aria-label="accessory muscle use" name="Acc_Mus_Use" value={respiratory.Acc_Mus_Use} onChange={handleChange}>
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
        </Container>
    )
}

export default Respiratory
