import React from 'react'
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

const tenCount = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

const Obstetric = ({ state, setState }) => {

    const handleChange = (e) => {
        setState(prev => ({
            ...prev,
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
                            value={state.Parity || ''}
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
                            value={state.Gravidity || ''}
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
                            value={state.Gestation_Stage || ''}
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
                            value={state.Delivery || ''}
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
                    {state.Delivery !== 'Other' ? '' :
                        <TextField
                            label="Other"
                            variant="filled"
                            color="secondary"
                            size="small"
                            name="Deliv_Other"
                            id="deliv-other"
                            value={state.Deliv_Other}
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
                            value={state.Baby_Presentation || ''}
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
                    {state.Baby_Presentation !== 'Other' ? '' :
                        <TextField
                            label="Other"
                            variant="filled"
                            color="secondary"
                            size="small"
                            name="Baby_Prsnt_Other"
                            id="baby-prsnt-other"
                            value={state.Baby_Prsnt_Other}
                            onChange={handleChange}
                            fullWidth
                        />
                    }
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Button variant="contained" fullWidth onClick={() => {
                        setState({
                            ...state,
                            Time_of_Birth: new Date().toLocaleTimeString('en-US'),
                        })
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
                        value={state.Time_of_Birth}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Button variant="contained" fullWidth onClick={() => {
                        setState({
                            ...state,
                            Time_Placenta_Delivered: new Date().toLocaleTimeString('en-US'),
                        })
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
                        value={state.Time_Placenta_Delivered}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>

                {/* <Grid item container xs={12} spacing={2}>
                <Grid item xs={6} sm={2}>
                    <Typography>Parity</Typography>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <FormControl
                        variant=""
                        color="secondary"
                        size="small"
                    >
                        <Select
                            name="Parity"
                            value={state.Parity || ''}
                            onChange={handleChange}
                        >
                            {tenCount.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Typography>Gravidity</Typography>
                </Grid>
                <Grid item xs={6} sm={2}>
                    
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Typography>Gestation</Typography>
                </Grid>
                <Grid item xs={6} sm={2}>
                    
                </Grid>
            </Grid>
            <Grid item container xs={12} spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl
                        variant="outlined"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="delivery-label">Delivery</InputLabel>
                        <Select
                            labelId="delivery-label"
                            id="delivery-defib"
                            name="Delivery"
                            value={state.Delivery || ''}
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
                    {state.Delivery !== 'Other' ? '' :
                        <TextField
                            label="Other"
                            variant="outlined"
                            color="secondary"
                            size="small"
                            name="Deliv_Other"
                            id="deliv-other"
                            value={state.Deliv_Other}
                            onChange={handleChange}
                            fullWidth
                        />
                    }
                </Grid>
            </Grid>
            <Grid item container xs={12} spacing={3}>

                <Grid item xs={12} sm={6}>
                    <FormControl
                        variant="outlined"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="baby-presentation-label">Baby Presentation</InputLabel>
                        <Select
                            labelId="baby-presentation-label"
                            id="baby-presentation-defib"
                            name="Baby_Presentation"
                            value={state.Baby_Presentation || ''}
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
                    
                </Grid>
            </Grid>

            <Grid item container xs={12} spacing={2} justifyContent="center">
                <Grid item xs={6} sm={3}>
                    <Button variant="contained" fullWidth onClick={() => {
                        setState({
                            ...state,
                            Time_of_Birth: new Date().toLocaleTimeString('en-US'),
                        })
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
                        value={state.Time_of_Birth}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid item container xs={12} spacing={2} justifyContent="center">
                <Grid item xs={6} sm={3}>
                    <Button variant="contained" fullWidth onClick={() => {
                        setState({
                            ...state,
                            Time_Placenta_Delivered: new Date().toLocaleTimeString('en-US'),
                        })
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
                        value={state.Time_Placenta_Delivered}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid> */}
            </Grid>
        </Container >

    )
}

export default Obstetric
