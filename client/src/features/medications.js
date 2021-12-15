import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: "12345",
    Medic_Given_Date: null,
    Medic_Given_Time: "",
    Medic_Given: "",
    Medic_Amount: "",
    Medic_Unit: "",
    Route: "",
    Effect_on_Patient: "",
    Paramedic_ID: "",
};

const medicationsSlice = createSlice({
    name: "medications",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = medicationsSlice.actions;

export default medicationsSlice.reducer;