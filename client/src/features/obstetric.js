import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: "12345",
    Parity: "",
    Gravidity: "",
    Gestation_Stage: "",
    Delivery: "",
    Deliv_Other: "",
    Baby_Presentation: "",
    Baby_Prsnt_Other: "",
    Time_of_Birth: new Date().toLocaleTimeString("en-US"),
    Time_Placenta_Delivered: new Date().toLocaleTimeString("en-US"),
};

const obstetricSlice = createSlice({
    name: "obstetric",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = obstetricSlice.actions;

export default obstetricSlice.reducer;