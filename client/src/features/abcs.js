import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: '12345',
    Airway_Status: '',
    Breath_Effort: '',
    Breath_Rate: '',
    Breath_Rhythm: '',
    Circul_Site: '',
    Circul_Rate: '',
    Circul_Vol: '',
    Circul_Rhythm: '',
};

const abcsSlice = createSlice({
    name: "abcs",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = abcsSlice.actions;

export default abcsSlice.reducer;