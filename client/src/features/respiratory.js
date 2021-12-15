import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: '12345',
    Level_of_distress: '',
    Breath_sound_I: '',
    Breath_sound_II: '',
    PreEMS_Medication: '',
    Response_to_Medic: '',
    Pain_Scale: '',
    Coughing: '',
    Tobacco: '',
    Allerg_Exposure: '',
    Medication_Admin: '',
    JVD: '',
    Periph_Edema: '',
    Acc_Mus_Use: '',
};

const respiratorySlice = createSlice({
    name: "respiratory",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = respiratorySlice.actions;

export default respiratorySlice.reducer;