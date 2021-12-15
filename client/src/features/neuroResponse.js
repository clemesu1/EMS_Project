import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: '12345',
    LOC: '',
    Status: '',
    R_Eye_Size: '',
    L_Eye_Size: '',
    R_Eye_React: '',
    L_Eye_React: '',
    Sense_UR: '',
    Sense_UL: '',
    Sense_LR: '',
    Sense_LL: '',
    Motor_UR: '',
    Motor_UL: '',
    Motor_LR: '',
    Motor_LL: '',
};

const neuroResponseSlice = createSlice({
    name: "neuroResponse",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = neuroResponseSlice.actions;

export default neuroResponseSlice.reducer;