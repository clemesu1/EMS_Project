import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: '12345',
    Proc_Time_Start: '',
    Proc_Time_End: '',
    Procedur: '',
    Proc_Other: '',
    Procedur_outcome: '',
    Device_Method: '',
    Procedur_Technician: '',
    Device_Size: '',
    Procedur_Success: '',
    Treatment_Type: '',
    Treat_Total_Time: '',
    Treatment_technician: '',
    Adm_Rt_Other: '',
    Admin_Route: '',
    Dosage_Amount: '',
    Dosage_Unit: '',
};

const interventionsSlice = createSlice({
    name: "interventions",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = interventionsSlice.actions;

export default interventionsSlice.reducer;