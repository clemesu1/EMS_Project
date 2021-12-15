import React from 'react'
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../features/obstetric';

const tenCount = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

const Obstetric = () => {
    const dispatch = useDispatch();
	const obstetric = useSelector((state) => state.obstetric.value)

    const handleChange = (e) => {
        dispatch(store({
			...obstetric,
			[e.target.name]: e.target.value,
		}))
    }

    return (
        <Container>
            <Grid container spacing={6} >
                <Grid item xs={12} sm={4}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="parity-label">Parity</InputLabel>
                        <Select
                            labelId="parity-label"
                            name="Parity"
                            value={obstetric.Parity || ''}
                            onChange={handleChange}
                        >
                            {tenCount.map((item, index) => (
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
                        <InputLabel id="gravidity-label">Gravidity</InputLabel>
                        <Select
                            labelId="gravidity-label"
                            name="Gravidity"
                            value={obstetric.Gravidity || ''}
                            onChange={handleChange}
                        >
                            {tenCount.map((item, index) => (
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
                        <InputLabel id="gestation-label">Gestation</InputLabel>
                        <Select
                            labelId="gestation-label"
                            name="Gestation_Stage"
                            value={obstetric.Gestation_Stage || ''}
                            onChange={handleChange}
                        >
                            {tenCount.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
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
                        <InputLabel id="delivery-label">Delivery</InputLabel>
                        <Select
                            labelId="delivery-label"
                            id="delivery-defib"
                            name="Delivery"
                            value={obstetric.Delivery || ''}
                            onChange={handleChange}
                            label="Delivery"
                        >
                            <MenuItem value={"No prehospital delivery"}>No prehospital delivery</MenuItem>
                            <MenuItem value={"At scene"}>At scene</MenuItem>
                            <MenuItem value={"En route to hospital"}>En route to hospital</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {obstetric.Delivery !== 'Other' ? '' :
                        <TextField
                            label="Other"
                            variant="filled"
                            color="secondary"
                            size="small"
                            name="Deliv_Other"
                            id="deliv-other"
                            value={obstetric.Deliv_Other}
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
                        <InputLabel id="baby-presentation-label">Baby Presentation</InputLabel>
                        <Select
                            labelId="baby-presentation-label"
                            id="baby-presentation-defib"
                            name="Baby_Presentation"
                            value={obstetric.Baby_Presentation || ''}
                            onChange={handleChange}
                            label="Baby Presentation"
                        >
                            <MenuItem value={"Head"}>Head</MenuItem>
                            <MenuItem value={"Arm"}>Arm</MenuItem>
                            <MenuItem value={"Leg"}>Leg</MenuItem>
                            <MenuItem value={"Breech"}>Breech</MenuItem>
                            <MenuItem value={"Prolapsed cord"}>Prolapsed cord</MenuItem>
                            <MenuItem value={"Cord around neck"}>Cord around neck</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {obstetric.Baby_Presentation !== 'Other' ? '' :
                        <TextField
                            label="Other"
                            variant="filled"
                            color="secondary"
                            size="small"
                            name="Baby_Prsnt_Other"
                            id="baby-prsnt-other"
                            value={obstetric.Baby_Prsnt_Other}
                            onChange={handleChange}
                            fullWidth
                        />
                    }
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Button variant="contained" fullWidth onClick={() => {
                         dispatch(store({
                            ...obstetric,
                            Time_of_Birth: new Date().toLocaleTimeString('en-US'),
                        }))
                    }}>
                        Time of Birth
                    </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        variant="outlined"
                        color="secondary"
                        size="small"
                        name="Time_of_Birth"
                        id="time-of-birth"
                        value={obstetric.Time_of_Birth}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Button variant="contained" fullWidth onClick={() => {
                        dispatch(store({
                            ...obstetric,
                            Time_Placenta_Delivered: new Date().toLocaleTimeString('en-US'),
                        }))
                    }}>
                        Time of Placenta Delivery
                    </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        variant="outlined"
                        color="secondary"
                        size="small"
                        name="Time_Placenta_Delivered"
                        id="time-placenta-delivered"
                        value={obstetric.Time_Placenta_Delivered}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Container >

    )
}

export default Obstetric
