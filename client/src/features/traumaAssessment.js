import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: "12345",
    H_Face: "",
    H_REar: "",
    H_LEar: "",
    H_Nose: "",
    H_Mouth: "",
    H_Scalp: "",
    N_Anterior: "",
    N_Posterior: "",
    C_Left: "",
    C_Right: "",
    Ab_LUQ: "",
    Ab_RUQ: "",
    Ab_LLQ: "",
    Ab_RLQ: "",
    Ab_UBQ: "",
    P_Vaginal: "",
    P_Genitalia: "",
    UE_LArm: "",
    UE_RArm: "",
    UE_LHand: "",
    UE_RHand: "",
    LE_LLeg: "",
    LE_RLeg: "",
    LE_LFoot: "",
    LE_RFoot: "",
    B_Thoratic: "",
    B_Lumbar: "",
};

const traumaAssessmentSlice = createSlice({
    name: "traumaAssessment",
    initialState: { value: initialStateValue },
    reducers: {
        store: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { store } = traumaAssessmentSlice.actions;

export default traumaAssessmentSlice.reducer;