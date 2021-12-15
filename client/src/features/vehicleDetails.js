import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: '12345',
    Date_Notified: '',
    T_Notified: '',
    T_enRoute: '',
    T_at_Scene: '',
    T_Crew_Patient: '',
    T_Left_Scene: '',
    T_at_destn: '',
    T_available: '',
    T_backarea: '',
    RTS_Type: '',
    RTS_Change: '',
    RFS_Type: '',
    RFS_Change: '',
    No_Transported: 0,
    C_driver: '',
    C_driv_oth: '',
    C_attendant: '',
    C_attn_oth: '',
    C_assistant: '',
    C_asst_oth: '',
    M_Out: '',
    M_atScene: '',
    M_atDest: '',
    M_In: '',
    M_Total: '',
    Dest_determinant: '',
    Doc_Start: '',
    Doc_Finish: '',
};

const vehicleDetailsSlice = createSlice({
    name: "vehicleDetails",
    initialState: { value: initialStateValue },
    reducers: {
        saveVehicleDetails: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { saveVehicleDetails } = vehicleDetailsSlice.actions;

export default vehicleDetailsSlice.reducer;