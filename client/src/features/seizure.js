import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: '12345',
    Witnessed_Seizure: '',
    Cause: '',
    Cause_Other: '',
    Witness_of_Seizure: '',
    S_Other: '',
    Type_of_Seizure: '',
    Type_Other: '',
    No_of_Seizure: 0,
    Seiz_Duration: 0,
};

const seizureSlice = createSlice({
    name: "seizure",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = seizureSlice.actions;

export default seizureSlice.reducer;