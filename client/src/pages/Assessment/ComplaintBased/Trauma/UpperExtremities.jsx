import React from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../../features/traumaAssessment';

const traumaList = ["Deformity", "Contusions", "Crepitus", "Abrasions", "Avulsions", "Punctures", "Paradoxical Mov't", "Burn - Superficial", "Burn - partial", "Burn - full", "Burn - circumferencial", "Lacerations ", "Pulsating Mass", "Swelling", "Discolouration", "Gaurding", "Tenderness", "Instability ", "Rigidity", "Tracheal Deviation", "JVD (Jugular vien distention)", "Flail Segment", "SQ Emphysema", "Shortening - ext rot", "Shortening - int rot", "Shortening - no rot", "Amputation - complete", "Amputation - partial"];

const UpperExtremities = () => {
    const dispatch = useDispatch();
    const traumaAssessment = useSelector((state) => state.traumaAssessment.value)

    const handleChange = (e) => {
        dispatch(store({
            ...traumaAssessment,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <Container>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={6} >
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="ue-left-arm-label">Left Arm</InputLabel>
                        <Select
                            labelId="ue-left-arm-label"
                            id="ue-left-arm"
                            name="UE_LArm"
                            value={traumaAssessment.UE_LArm || ''}
                            onChange={handleChange}
                        >
                            {traumaList.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="ue-right-arm-label">Right Arm</InputLabel>
                        <Select
                            labelId="ue-right-arm-label"
                            id="ue-right-arm"
                            name="UE_RArm"
                            value={traumaAssessment.UE_RArm || ''}
                            onChange={handleChange}
                        >
                            {traumaList.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} >
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="ue-left-hand-label">Left Hand</InputLabel>
                        <Select
                            labelId="ue-left-hand-label"
                            id="ue-left-hand"
                            name="UE_LHand"
                            value={traumaAssessment.UE_LHand || ''}
                            onChange={handleChange}
                        >
                            {traumaList.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="ue-right-hand-label">Right Hand</InputLabel>
                        <Select
                            labelId="ue-right-hand-label"
                            id="ue-right-hand"
                            name="UE_RHand"
                            value={traumaAssessment.UE_RHand || ''}
                            onChange={handleChange}
                        >
                            {traumaList.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UpperExtremities
