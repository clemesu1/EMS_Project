import React from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../../features/traumaAssessment';

const traumaList = ["Deformity", "Contusions", "Crepitus", "Abrasions", "Avulsions", "Punctures", "Paradoxical Mov't", "Burn - Superficial", "Burn - partial", "Burn - full", "Burn - circumferencial", "Lacerations ", "Pulsating Mass", "Swelling", "Discolouration", "Gaurding", "Tenderness", "Instability ", "Rigidity", "Tracheal Deviation", "JVD (Jugular vien distention)", "Flail Segment", "SQ Emphysema", "Shortening - ext rot", "Shortening - int rot", "Shortening - no rot", "Amputation - complete", "Amputation - partial"];

const LowerExtremities = () => {
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
                        <InputLabel id="le-left-leg-label">Left Leg</InputLabel>
                        <Select
                            labelId="le-left-leg-label"
                            id="le-left-leg"
                            name="LE_LLeg"
                            value={traumaAssessment.LE_LLeg || ''}
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
                        <InputLabel id="le-right-leg-label">Right Leg</InputLabel>
                        <Select
                            labelId="le-right-leg-label"
                            id="le-right-leg"
                            name="LE_RLeg"
                            value={traumaAssessment.LE_RLeg || ''}
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
                        <InputLabel id="le-left-foot-label">Left Foot</InputLabel>
                        <Select
                            labelId="le-left-foot-label"
                            id="le-left-foot"
                            name="LE_LFoot"
                            value={traumaAssessment.LE_LFoot || ''}
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
                        <InputLabel id="le-right-foot-label">Right Foot</InputLabel>
                        <Select
                            labelId="le-right-foot-label"
                            id="le-right-foot"
                            name="LE_RFoot"
                            value={traumaAssessment.LE_RFoot || ''}
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

export default LowerExtremities
