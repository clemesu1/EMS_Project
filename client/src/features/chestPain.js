import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: '12345',
    Pain_Severity: '',
    Name_of_PreEMS_Medic: '',
    Self_Medic_Admin: '',
    Response_to_Medic: '',
    OnSet: '',
    Provoked: '',
    Quality: '',
    Qty_Other: '',
    Source_of_Pain: '',
    SPain_Other: '',
    Pain_radiation_site: '',
    PRSite_Other: '',
    State_at_Onset: '',
    SOnset_Other: '',
    Pace_Implant_Defib: '',
    PIDefib_Other: '',
};

const chestPainSlice = createSlice({
    name: "chestPain",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = chestPainSlice.actions;

export default chestPainSlice.reducer;