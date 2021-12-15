import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: '12345',
    Cause_of_Injury: '',
    COI_Other: '',
    Human_Factor: '',
    HF_Other: '',
    Nature_of_Injury: '',
    Safety_Protect_Equip: '',
    SPE_Other: '',
    Work_related: '',
    Comments: '',
    MVC: '',
};

const mechanismInjurySlice = createSlice({
    name: "mechanismInjury",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = mechanismInjurySlice.actions;

export default mechanismInjurySlice.reducer;