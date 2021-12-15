import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../../features/traumaAssessment';

const traumaList = ["Deformity", "Contusions", "Crepitus", "Abrasions", "Avulsions", "Punctures", "Paradoxical Mov't", "Burn - Superficial", "Burn - partial", "Burn - full", "Burn - circumferencial", "Lacerations ", "Pulsating Mass", "Swelling", "Discolouration", "Gaurding", "Tenderness", "Instability ", "Rigidity", "Tracheal Deviation", "JVD (Jugular vien distention)", "Flail Segment", "SQ Emphysema", "Shortening - ext rot", "Shortening - int rot", "Shortening - no rot", "Amputation - complete", "Amputation - partial"];

const Head = () => {
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
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="h-face-label">Face</InputLabel>
                        <Select
                            labelId="h-face-label"
                            id="h-face"
                            name="H_Face"
                            value={traumaAssessment.H_Face || ''}
                            onChange={handleChange}
                        >
                            {traumaList.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="h-r-ear-label">Right Ear</InputLabel>
                        <Select
                            labelId="h-r-ear-label"
                            id="h-r-ear"
                            name="H_REar"
                            value={traumaAssessment.H_REar || ''}
                            onChange={handleChange}
                        >
                            {traumaList.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="h-nose-label">Nose</InputLabel>
                        <Select
                            labelId="h-nose-label"
                            id="h-nose"
                            name="H_Nose"
                            value={traumaAssessment.H_Nose || ''}
                            onChange={handleChange}
                        >
                            {traumaList.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="h-mouth-label">Mouth</InputLabel>
                        <Select
                            labelId="h-mouth-label"
                            id="h-mouth"
                            name="H_Mouth"
                            value={traumaAssessment.H_Mouth || ''}
                            onChange={handleChange}
                        >
                            {traumaList.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="h-l-ear-label">Left Ear</InputLabel>
                        <Select
                            labelId="h-l-ear-label"
                            id="h-l-ear"
                            name="H_LEar"
                            value={traumaAssessment.H_LEar || ''}
                            onChange={handleChange}
                        >
                            {traumaList.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="h-scalp-label">Scalp</InputLabel>
                        <Select
                            labelId="h-scalp-label"
                            id="h-scalp"
                            name="H_Scalp"
                            value={traumaAssessment.H_Scalp || ''}
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

export default Head
