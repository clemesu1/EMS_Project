import React from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../../features/traumaAssessment';

const traumaList = ["Deformity", "Contusions", "Crepitus", "Abrasions", "Avulsions", "Punctures", "Paradoxical Mov't", "Burn - Superficial", "Burn - partial", "Burn - full", "Burn - circumferencial", "Lacerations ", "Pulsating Mass", "Swelling", "Discolouration", "Gaurding", "Tenderness", "Instability ", "Rigidity", "Tracheal Deviation", "JVD (Jugular vien distention)", "Flail Segment", "SQ Emphysema", "Shortening - ext rot", "Shortening - int rot", "Shortening - no rot", "Amputation - complete", "Amputation - partial"];

const Back = () => {
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
                <Grid item xs={12} md={6}>
                    <FormControl
                        variant="filled"
                        color="secondary"
                        size="small"
                        fullWidth
                    >
                        <InputLabel id="b-thoratic-label">Thoratic</InputLabel>
                        <Select
                            labelId="b-thoratic-label"
                            id="b-thoratic"
                            name="B_Thoratic"
                            value={traumaAssessment.B_Thoratic || ''}
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
                        <InputLabel id="b-lumbar-label">Lumbar</InputLabel>
                        <Select
                            labelId="b-lumbar-label"
                            id="b-lumbar"
                            name="B_Lumbar"
                            value={traumaAssessment.B_Lumbar || ''}
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

export default Back
