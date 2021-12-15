import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: '12345',
    Surname: '',
    Given_Name: '',
    Street: '',
    Community: '',
    Province: '',
    Country: '',
    PostalCode: '',
    Tel_No: '',
    DOB: '',
    Age: '',
    Race: '',
    Gender: '',
    Medicare_No: '',
    Medicare_Origin: '',
    Hospital_Chart_No: '',
    P_Comments: '',
};

const patientDetailsSlice = createSlice({
    name: "patientDetails",
    initialState: { value: initialStateValue },
    reducers: {
        savePatientDetails: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { savePatientDetails } = patientDetailsSlice.actions;

export default patientDetailsSlice.reducer;