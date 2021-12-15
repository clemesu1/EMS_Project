import { Button, FormControl, InputLabel, MenuItem, Select, Typography,  Container, Grid, TextField} from '@material-ui/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../features/toxicExposure';

const substanceNames = ["Amobarbital (Sodium Amytal; hypnotics) ", "Aprobarbital (hypnotic) ", "Butabarbital (hypnotics) ", "Butalbital (Fiorinal; sedative) ", "Hexobarbital (Sombulex; hypnotic/anesthetic) ", "Methylphenobarbital (Mebaral; antianxiety, anticonvulsant) ", "Pentobarbital (Nembutal; hypnotic) ", "Phenobarbital (Luminal; hypnotic, sedative, anticonvulsant) ", "Secobarbital (Seconal; hypnotic) ", "Sodium thiopental ", "Talbutal (Lotusate; hypnotic) ", "Thiobarbital (anesthetic) ", "Narcotic", "Heroin ", "Morphine ", "Opium ", "Cocaine", "Alcohol", "Prescription drugs"];
const substanceTypes = ["Unknown", "Medications", "Alcohol", "Chemicals", "Plants", "Food", "Venom", "Radioactive material", "Smoke / Gas", "Other"];
const entryRoutes = ["Absorption", "Bite / Sting", "Ingestion", "Inhalation", "Injection", "Other", "Unknown"];
const reactionTypes = ["GI disturbances", "Local reaction", "Loss of consciousness", "Other", "Respiratory distress", "Systemic symptoms"];
const evidenceTypes = ["Containers", "Odour", "Other", "Paraphernalia", "Physical Signs", "Pills", "Traces of subtances found"];

const ToxicExposure = ({  assessmentItems }) => {
    const dispatch = useDispatch();
	const toxicExposure = useSelector((state) => state.toxicExposure.value)

    const handleChange = (e) => {
        dispatch(store({
			...toxicExposure,
			[e.target.name]: e.target.value,
		}))
    }

    const { substanceAmount, setSubstanceAmount, substanceUnit, setSubstanceUnit } = assessmentItems;

    const handleSubstanceAmount = (e) => {
        setSubstanceAmount(e.target.value)
    }
    const handleSubstanceUnit = (e) => {
        setSubstanceUnit(e.target.value)

        const substanceValue = substanceAmount.length >= 0 ? substanceAmount + ' ' + substanceUnit : '0'

        dispatch(store({
			...toxicExposure,
            Amount_of_substance: substanceValue
        }))
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={6} md={12}>
                    <TextField
                        variant="filled"
                        label="Duration"
                        color="secondary"
                        size="small"
                        name="Duration"
                        id="duration"
                        value={toxicExposure.Duration}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="nature-of-exposure-label">Nature of Exposure</InputLabel>
                        <Select
                            labelId="nature-of-exposure-label"
                            id="nature-of-exposure"
                            name="Nature_of_Expo"
                            value={toxicExposure.Nature_of_Expo || ''}
                            onChange={handleChange}
                            label="Nature of Exposure"
                        >
                            <MenuItem value={"Accidental"}>Accidental</MenuItem>
                            <MenuItem value={"Intentional (self-inflicted)"}>Intentional (self-inflicted)</MenuItem>
                            <MenuItem value={"Unknown"}>Unknown</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Button
                        variant="contained"
                        color="default"
                        fullWidth
                        onClick={() => {
                            dispatch(store({
                                ...toxicExposure,
                                Exposure_time: new Date().toLocaleTimeString('en-US'),
                            }))
                        }}
                    >
                        Time of Exposure
                    </Button>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <TextField
                        variant="outlined"
                        color="secondary"
                        size="small"
                        name="Exposure_time"
                        id="exposure-time"
                        value={toxicExposure.Exposure_time}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="name-of-substance-label">Name of Substance</InputLabel>
                        <Select
                            labelId="name-of-substance-label"
                            id="name-of-substance"
                            name="Name_of_substance"
                            value={toxicExposure.Name_of_substance || ''}
                            onChange={handleChange}
                            label="Name of Substance"
                        >
                            {substanceNames.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item container xs={12} sm={4} md={6} spacing={2} alignItems="center">
                    <Grid item>
                        <Typography>Amount of Substance</Typography>
                    </Grid>
                    <Grid item container xs={6} sm={6} md={4} spacing={1}>
                        <Grid item xs sm md lg xl>
                            <TextField
                                variant="filled"
                                color="secondary"
                                size="small"
                                placeholder="0"
                                name="substanceAmount"
                                id="substance-amount"
                                value={substanceAmount}
                                onChange={handleSubstanceAmount}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs sm md lg xl>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                            >
                                <Select
                                    id="substance-unit"
                                    name="substanceUnit"
                                    value={substanceUnit || ''}
                                    onChange={handleSubstanceUnit}
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
                <Grid item container xs={12} sm={8} md={12} spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl
                            variant="filled"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <InputLabel id="type-of-substance-label">Type of Substance</InputLabel>
                            <Select
                                labelId="type-of-substance-label"
                                id="type-of-substance"
                                name="Type_of_substance"
                                value={toxicExposure.Type_of_substance || ''}
                                onChange={handleChange}
                                label="Type of Substance"
                            >
                                {substanceTypes.map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    {toxicExposure.Type_of_substance !== 'Other' ? '' :
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Other"
                                variant="filled"
                                color="secondary"
                                size="small"
                                name="Typ_sub_Other"
                                id="type-sub-other"
                                value={toxicExposure.Typ_sub_Other}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                    }
                </Grid>
                <Grid item container xs={12} sm={8} md={12} spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl
                            variant="filled"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <InputLabel id="route-of-entry-label">Route of Entry</InputLabel>
                            <Select
                                labelId="route-of-entry-label"
                                id="route-of-entry"
                                name="Route_of_entry"
                                value={toxicExposure.Route_of_entry || ''}
                                onChange={handleChange}
                                label="Route of Entry"
                            >
                                {entryRoutes.map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    {toxicExposure.Route_of_entry !== 'Other' ? '' :
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Other"
                                variant="filled"
                                color="secondary"
                                size="small"
                                name="Route_Other"
                                id="route-other"
                                value={toxicExposure.Route_Other}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                    }
                </Grid>
                <Grid item container xs={12} sm={8} md={12} spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl
                            variant="filled"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <InputLabel id="type-of-reaction-label">Type of reaction to substance</InputLabel>
                            <Select
                                labelId="type-of-reaction-label"
                                id="type-of-reaction"
                                name="Type_of_reaction"
                                value={toxicExposure.Type_of_reaction || ''}
                                onChange={handleChange}
                                label="Type of reaction to substance"
                            >
                                {reactionTypes.map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    {toxicExposure.Type_of_reaction !== 'Other' ? '' :
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Other"
                                variant="filled"
                                color="secondary"
                                size="small"
                                name="Reaction_Other"
                                id="reaction-other"
                                value={toxicExposure.Reaction_Other}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                    }
                </Grid>
                <Grid item container xs={12} sm={8} md={12} spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl
                            variant="filled"
                            color="secondary"
                            size="small"
                            fullWidth
                        >
                            <InputLabel id="evidence-of-substance-label">Evidence of Substance</InputLabel>
                            <Select
                                labelId="evidence-of-substance-label"
                                id="evidence-of-substance"
                                name="Evidence"
                                value={toxicExposure.Evidence || ''}
                                onChange={handleChange}
                                label="Evidence of Substance"
                            >
                                {evidenceTypes.map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    {toxicExposure.Evidence !== 'Other' ? '' :
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Other"
                                variant="filled"
                                color="secondary"
                                size="small"
                                name="Evidence_Other"
                                id="evidence-other"
                                value={toxicExposure.Evidence_Other}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Container >

    )
}

export default ToxicExposure
