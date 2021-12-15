import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: "12345",
    Service_Code: "",
    Service_Type: "",
    Dispatch_Code: "",
    Date_of_Incident: "",
    Inc_Street: "",
    Inc_Community: "",
    Inc_Province: "",
    Inc_PostalCode: "",
    Dest_Determinant: "",
    DD_Other: "",
    Geo_Locator: "",
    Inc_Loc_Type: "",
    Dest_Facility_Code: "",
    Dest_Street: "",
    Dest_Community: "",
    Dest_Province: "",
    Dest_PostalCode: "",
    Dest_Facility: "",
    Scene_Facility_Code: "",
    Fact_Affect_EMS: "",
    Fact_Other: "",
    Patient_Contact: "",
    Patient_Disposition: "",
    Pt_Disp_Other: "",
    Service_Payment_Respons: "",
    Service_Payment_Number: "",
};

const incidentDetailsSlice = createSlice({
    name: "incidentDetails",
    initialState: { value: initialStateValue },
    reducers: {
        saveIncidentDetails: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { saveIncidentDetails } = incidentDetailsSlice.actions;

export default incidentDetailsSlice.reducer;