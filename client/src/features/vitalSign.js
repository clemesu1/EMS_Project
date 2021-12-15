import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: "12345",
    Vitals_Date: null,
    Vitals_Time: "",
    Heart_Rate: "",
    Heart_Site: "",
    Heart_Site_Oth: "",
    Card_Rhyth: "",
    Card_Rhyth_Oth: "",
    BP_Sys: "",
    BP_Dia: "",
    Resp_Rate: "",
    Oxy_Sat: "",
    Glucose: "",
    Glascow_Eye: "",
    Glascow_Verbal: "",
    Glascow_Motor: "",
    Skin_Color: "",
    Skin_Temp: "",
    Skin_Moisture: "",
    VT_Temp: "",
    VT_Temp_Site: "",
    LOC: "",
};

const vitalSignSlice = createSlice({
    name: "vitalSign",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = vitalSignSlice.actions;

export default vitalSignSlice.reducer;