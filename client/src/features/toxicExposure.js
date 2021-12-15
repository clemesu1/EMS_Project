import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: '12345',
    Nature_of_Expo: '',
    Exposure_time: '',
    Name_of_substance: '',
    Type_of_substance: '',
    Typ_sub_Other: '',
    Amount_of_substance: '',
    Duration: '',
    Route_of_entry: '',
    Route_Other: '',
    Type_of_reaction: '',
    Reaction_Other: '',
    Evidence: '',
    Evidence_Other: '',
};

const toxicExposureSlice = createSlice({
    name: "toxicExposure",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = toxicExposureSlice.actions;

export default toxicExposureSlice.reducer;