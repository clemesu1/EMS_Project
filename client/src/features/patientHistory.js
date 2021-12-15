import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: "12345",
    Chief_Complaint: "",
    G_BodySystem: "",
    G_Inj_Date: "",
    G_Inj_Time: "",
    G_Co_Responders: "",
    G_Treat_Rendered: "",
    G_Pt_Condi_Dest: "",
    G_Pt_Disp: "",
    G_Susp_Intoxi: "",
    G_DNR_Order: false,
    Alr_Drugs: "",
    Alr_Env: "",
    Alr_Others: "",
    Med_Name: "",
    Med_Others: "",
    LM_Comment: "",
    EP_Comment: "",
    PH_History: "",
    PH_Comment: "",
};

const patientHistorySlice = createSlice({
    name: "patientHistory",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = patientHistorySlice.actions;

export default patientHistorySlice.reducer;