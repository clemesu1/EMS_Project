import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: '12345',
    Inf_Time_Breath: '',
    min1_Heartrate: '',
    min1_Respeffort: '',
    min1_Muscletone: '',
    min1_Reflexirrit: '',
    min1_Colour: '',
    min5_Heartrate: '',
    min5_Respeffort: '',
    min5_Muscletone: '',
    min5_Reflexirrit: '',
    min5_Colour: '',
    min1_Total: '',
    min5_Total: '',
};

const neonatalAssessmentSlice = createSlice({
    name: "neonatalAssessment",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = neonatalAssessmentSlice.actions;

export default neonatalAssessmentSlice.reducer;