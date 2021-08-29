import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Container, Grid, TextField } from '@material-ui/core'
import React from 'react'

const VitalSign = ({ state, setState }) => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={3} lg={1}>
                    <Typography>Vitals Taken At</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <TextField
                        label="Date"
                        variant="filled"
                        color="secondary"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        type="date"
                        // autoComplete="bday"
                        // value={state.DOB}
                        // onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <TextField
                        label="Time"
                        variant="filled"
                        color="secondary"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        type="time"
                        // autoComplete="bday"
                        // value={state.DOB}
                        // onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={3} lg={2}>
                    <Button
                        variant="contained"
                        fullWidth
                    >
                        Vitals Now
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default VitalSign
