import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React from 'react'

var min1_Total = 0
var min5_Total = 0

const Neonatal = ({ state, setState }) => {

    const handleChange = (e) => {
        setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))

        const min1 = getMin1Total();
        const min5 = getMin5Total();
        setState(prev => ({
            ...prev,
            min1_Total: min1,
            min5_Total: min5,
        }))

    }

    const getMin1Total = () => {
        if (state.min1_Colour === '' || state.min1_Heartrate === '' || state.min1_Muscletone === '' || state.min1_Reflexirrit === '' || state.min1_Respeffort === '') {
            return ''
        } else {
            min1_Total = state.min1_Colour + state.min1_Heartrate + state.min1_Muscletone + state.min1_Reflexirrit + state.min1_Respeffort
            return min1_Total;
        }
    }

    const getMin5Total = () => {
        if (state.min5_Colour === '' || state.min5_Heartrate === '' || state.min5_Muscletone === '' || state.min5_Reflexirrit === '' || state.min5_Respeffort === '') {
            return ''
        } else {
            min5_Total = state.min5_Colour + state.min5_Heartrate + state.min5_Muscletone + state.min5_Reflexirrit + state.min5_Respeffort
            return min5_Total;
        }
    }

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3} >
                <Grid item container xs={12} spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => {
                                setState({
                                    ...state,
                                    Inf_Time_Breath: new Date().toLocaleTimeString('en-US'),
                                })
                            }}
                        >
                            Infant Time of Breathing
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            size="small"
                            name="Inf_Time_Breath"
                            value={state.Inf_Time_Breath}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={12} spacing={3}>
                    <Grid item container xs={12} sm={6} spacing={2} justifyContent="center">
                        <Grid item container xs={12} justifyContent="center">
                            <Typography variant="h6">1 Minute</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                fullWidth
                            >
                                <InputLabel id="min1_Colour-label">Color</InputLabel>
                                <Select
                                    labelId="min1_Colour-label"
                                    name="min1_Colour"
                                    value={state.min1_Colour}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>0 (blue, pale)</MenuItem>
                                    <MenuItem value={1}>1 (body pink, extremities blue)</MenuItem>
                                    <MenuItem value={2}>2 (completely pink)</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={8}>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                fullWidth
                            >
                                <InputLabel id="min1_Heartrate-label">Heart Rate</InputLabel>

                                <Select
                                    labelId="min1_Heartrate-label"
                                    name="min1_Heartrate"
                                    value={state.min1_Heartrate}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>{'0 (absent)'}</MenuItem>
                                    <MenuItem value={1}>{'1 (slow <= 100)'}</MenuItem>
                                    <MenuItem value={2}>{'2 (normal >= 100)'}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={8}>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                fullWidth
                            >
                                <InputLabel id="min1_Reflexirrit-label">Reflex Irritability</InputLabel>

                                <Select
                                    labelId="min1_Reflexirrit-label"
                                    name="min1_Reflexirrit"
                                    value={state.min1_Reflexirrit}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>{'0 (No response)'}</MenuItem>
                                    <MenuItem value={1}>{'1 (slight motion, weak cry)'}</MenuItem>
                                    <MenuItem value={2}>{'2 (strong cry, extremity retraction)'}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={8}>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                fullWidth
                            >
                                <InputLabel id="min1_Muscletone-label">Muscle Tone</InputLabel>
                                <Select
                                    labelId="min1_Muscletone-label"
                                    name="min1_Muscletone"
                                    value={state.min1_Muscletone}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>{'0 (limp)'}</MenuItem>
                                    <MenuItem value={1}>{'1 (some flexion of extremities)'}</MenuItem>
                                    <MenuItem value={2}>{'2 (well flexed)'}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={8}>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                fullWidth
                            >
                                <InputLabel id="min1_Respeffort-label">Respiratory Effort</InputLabel>

                                <Select
                                    labelId="min1_Respeffort-label"
                                    name="min1_Respeffort"
                                    value={state.min1_Respeffort}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>{'0 (absent)'}</MenuItem>
                                    <MenuItem value={1}>{'1 (slow, irregular, weak cry)'}</MenuItem>
                                    <MenuItem value={2}>{'2 (rapid, regular, strong cry)'}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item container xs={12} justifyContent="center">
                            <TextField
                                variant="outlined"
                                color="secondary"
                                size="small"
                                name="min1_Total"
                                value={getMin1Total()}
                            />
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} sm={6} spacing={2} justifyContent="center">
                        <Grid item container xs={12} justifyContent="center">
                            <Typography variant="h6">5 Minute</Typography>
                        </Grid>

                        <Grid item xs={8}>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                fullWidth
                            >
                                <InputLabel id="min5_Colour-label">Color</InputLabel>
                                <Select
                                    labelId="min5_Colour-label"
                                    name="min5_Colour"
                                    value={state.min5_Colour}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>0 (blue, pale)</MenuItem>
                                    <MenuItem value={1}>1 (body pink, extremities blue)</MenuItem>
                                    <MenuItem value={2}>2 (completely pink)</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={8}>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                fullWidth
                            >
                                <InputLabel id="min5_Heartrate-label">Heart Rate</InputLabel>

                                <Select
                                    labelId="min5_Heartrate-label"
                                    name="min5_Heartrate"
                                    value={state.min5_Heartrate}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>{'0 (absent)'}</MenuItem>
                                    <MenuItem value={1}>{'1 (slow <= 100)'}</MenuItem>
                                    <MenuItem value={2}>{'2 (normal >= 100)'}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={8}>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                fullWidth
                            >
                                <InputLabel id="min5_Reflexirrit-label">Reflex Irritability</InputLabel>

                                <Select
                                    labelId="min5_Reflexirrit-label"
                                    name="min5_Reflexirrit"
                                    value={state.min5_Reflexirrit}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>{'0 (No response)'}</MenuItem>
                                    <MenuItem value={1}>{'1 (slight motion, weak cry)'}</MenuItem>
                                    <MenuItem value={2}>{'2 (strong cry, extremity retraction)'}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={8}>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                fullWidth
                            >
                                <InputLabel id="min5_Muscletone-label">Muscle Tone</InputLabel>
                                <Select
                                    labelId="min5_Muscletone-label"
                                    name="min5_Muscletone"
                                    value={state.min5_Muscletone}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>{'0 (limp)'}</MenuItem>
                                    <MenuItem value={1}>{'1 (some flexion of extremities)'}</MenuItem>
                                    <MenuItem value={2}>{'2 (well flexed)'}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={8}>
                            <FormControl
                                variant="filled"
                                color="secondary"
                                size="small"
                                fullWidth
                            >
                                <InputLabel id="min5_Respeffort-label">Respiratory Effort</InputLabel>

                                <Select
                                    labelId="min5_Respeffort-label"
                                    name="min5_Respeffort"
                                    value={state.min5_Respeffort}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}>{'0 (absent)'}</MenuItem>
                                    <MenuItem value={1}>{'1 (slow, irregular, weak cry)'}</MenuItem>
                                    <MenuItem value={2}>{'2 (rapid, regular, strong cry)'}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item container xs={12} justifyContent="center">
                            <TextField
                                variant="outlined"
                                color="secondary"
                                size="small"
                                name="min5_Total"
                                value={getMin5Total()}
                            />
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        </Container >
        // <Grid container spacing={3} justifyContent="center">

        //     <Container>
        //         <Grid item container xs={12} spacing={3} alignItems="center" >
        //             <Grid item xs={2} />
        //             <Grid item container xs={5} justifyContent="center">
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <Typography variant="h6">5 Minute</Typography>
        //             </Grid>

        //             <Grid item container xs={2}>
        //                 <Typography>Colour</Typography>
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <FormControl
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     fullWidth
        //                 >
        //                     <Select
        //                         name="min1_Colour"
        //                         value={state.min1_Colour}
        //                         onChange={handleChange}
        //                     >
        //                         <MenuItem value={0}>0 (blue, pale)</MenuItem>
        //                         <MenuItem value={1}>1 (body pink, extremities blue)</MenuItem>
        //                         <MenuItem value={2}>2 (completely pink)</MenuItem>
        //                     </Select>
        //                 </FormControl>
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <FormControl
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     fullWidth
        //                 >
        //                     <Select
        //                         name="min5_Colour"
        //                         value={state.min5_Colour}
        //                         onChange={handleChange}
        //                     >
        //                         <MenuItem value={0}>0 (blue, pale)</MenuItem>
        //                         <MenuItem value={1}>1 (body pink, extremities blue)</MenuItem>
        //                         <MenuItem value={2}>2 (completely pink)</MenuItem>
        //                     </Select>
        //                 </FormControl>
        //             </Grid>

        //             <Grid item container xs={2}>
        //                 <Typography>Heart Rate</Typography>
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <FormControl
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     fullWidth
        //                 >
        //                     <Select
        //                         name="min1_Heartrate"
        //                         value={state.min1_Heartrate}
        //                         onChange={handleChange}
        //                     >
        //                         <MenuItem value={0}>{'0 (absent)'}</MenuItem>
        //                         <MenuItem value={1}>{'1 (slow <= 100)'}</MenuItem>
        //                         <MenuItem value={2}>{'2 (normal >= 100)'}</MenuItem>
        //                     </Select>
        //                 </FormControl>
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <FormControl
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     fullWidth
        //                 >
        //                     <Select
        //                         name="min5_Heartrate"
        //                         value={state.min5_Heartrate}
        //                         onChange={handleChange}
        //                     >
        //                         <MenuItem value={0}>{'0 (absent)'}</MenuItem>
        //                         <MenuItem value={1}>{'1 (slow <= 100)'}</MenuItem>
        //                         <MenuItem value={2}>{'2 (normal >= 100)'}</MenuItem>
        //                     </Select>
        //                 </FormControl>
        //             </Grid>

        //             <Grid item container xs={2}>
        //                 <Typography>Reflex Irritability</Typography>
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <FormControl
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     fullWidth
        //                 >
        //                     <Select
        //                         name="min1_Reflexirrit"
        //                         value={state.min1_Reflexirrit}
        //                         onChange={handleChange}
        //                     >
        //                         <MenuItem value={0}>{'0 (No response)'}</MenuItem>
        //                         <MenuItem value={1}>{'1 (slight motion, weak cry)'}</MenuItem>
        //                         <MenuItem value={2}>{'2 (strong cry, extremity retraction)'}</MenuItem>
        //                     </Select>
        //                 </FormControl>
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <FormControl
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     fullWidth
        //                 >
        //                     <Select
        //                         name="min5_Reflexirrit"
        //                         value={state.min5_Reflexirrit}
        //                         onChange={handleChange}
        //                     >
        //                         <MenuItem value={0}>{'0 (No response)'}</MenuItem>
        //                         <MenuItem value={1}>{'1 (slight motion, weak cry)'}</MenuItem>
        //                         <MenuItem value={2}>{'2 (strong cry, extremity retraction)'}</MenuItem>
        //                     </Select>
        //                 </FormControl>
        //             </Grid>

        //             <Grid item container xs={2}>
        //                 <Typography>Muscle Tone</Typography>
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <FormControl
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     fullWidth
        //                 >
        //                     <Select
        //                         name="min1_Muscletone"
        //                         value={state.min1_Muscletone}
        //                         onChange={handleChange}
        //                     >

        //                     </Select>
        //                 </FormControl>
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <FormControl
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     fullWidth
        //                 >
        //                     <Select
        //                         name="min5_Muscletone"
        //                         value={state.min5_Muscletone}
        //                         onChange={handleChange}
        //                     >
        //                         <MenuItem value={0}>{'0 (limp)'}</MenuItem>
        //                         <MenuItem value={1}>{'1 (some flexion of extremities)'}</MenuItem>
        //                         <MenuItem value={2}>{'2 (well flexed)'}</MenuItem>
        //                     </Select>
        //                 </FormControl>
        //             </Grid>

        //             <Grid item container xs={2}>
        //                 <Typography>Respiratory Effort</Typography>
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <FormControl
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     fullWidth
        //                 >
        //                     <Select
        //                         name="min1_Respeffort"
        //                         value={state.min1_Respeffort}
        //                         onChange={handleChange}
        //                     >

        //                     </Select>
        //                 </FormControl>
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <FormControl
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     fullWidth
        //                 >
        //                     <Select
        //                         name="min5_Respeffort"
        //                         value={state.min5_Respeffort}
        //                         onChange={handleChange}
        //                     >
        //                         <MenuItem value={0}>{'0 (absent)'}</MenuItem>
        //                         <MenuItem value={1}>{'1 (slow, irregular, weak cry)'}</MenuItem>
        //                         <MenuItem value={2}>{'2 (rapid, regular, strong cry)'}</MenuItem>
        //                     </Select>
        //                 </FormControl>
        //             </Grid>

        //             <Grid item xs={2} />
        //             <Grid item container xs={5} justifyContent="center">
        //                 <TextField
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     name="min1_Total"
        //                     value={getMin1Total()}
        //                 />
        //             </Grid>
        //             <Grid item container xs={5} justifyContent="center">
        //                 <TextField
        //                     variant="outlined"
        //                     color="secondary"
        //                     size="small"
        //                     name="min5_Total"
        //                     value={getMin5Total()}
        //                 />

        //             </Grid>

        //         </Grid>
        //     </Container>

        // </Grid>
    )
}

export default Neonatal
