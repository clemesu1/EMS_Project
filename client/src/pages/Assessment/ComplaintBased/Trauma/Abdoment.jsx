import React from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../../features/traumaAssessment';

const traumaList = ["Deformity", "Contusions", "Crepitus", "Abrasions", "Avulsions", "Punctures", "Paradoxical Mov't", "Burn - Superficial", "Burn - partial", "Burn - full", "Burn - circumferencial", "Lacerations ", "Pulsating Mass", "Swelling", "Discolouration", "Gaurding", "Tenderness", "Instability ", "Rigidity", "Tracheal Deviation", "JVD (Jugular vien distention)", "Flail Segment", "SQ Emphysema", "Shortening - ext rot", "Shortening - int rot", "Shortening - no rot", "Amputation - complete", "Amputation - partial"];

const Abdoment = () => {
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
                        <InputLabel id="ab-luq-label">Left Upper Quadrant</InputLabel>
                        <Select
                            labelId="ab-luq-label"
                            id="ab-luq"
                            name="Ab_LUQ"
                            value={traumaAssessment.Ab_LUQ || ''}
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
                        <InputLabel id="ab-ruq-label">Right Upper Quadrant</InputLabel>
                        <Select
                            labelId="ab-ruq-label"
                            id="ab-ruq"
                            name="Ab_RUQ"
                            value={traumaAssessment.Ab_RUQ || ''}
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
                        <InputLabel id="ab-ubq-label">Umbilicus</InputLabel>
                        <Select
                            labelId="ab-ubq-label"
                            id="ab-ubq"
                            name="Ab_UBQ"
                            value={traumaAssessment.Ab_UBQ || ''}
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
                        <InputLabel id="ab-llq-label">Left Lower Quadrant</InputLabel>
                        <Select
                            labelId="ab-llq-label"
                            id="ab-llq"
                            name="Ab_LLQ"
                            value={traumaAssessment.Ab_LLQ || ''}
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
                        <InputLabel id="ab-rlq-label">Right Lower Quadrant</InputLabel>
                        <Select
                            labelId="ab-rlq-label"
                            id="ab-rlq"
                            name="Ab_RLQ"
                            value={traumaAssessment.Ab_RLQ || ''}
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

export default Abdoment
