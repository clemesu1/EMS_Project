import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    Call_ID: "12345",
    MIN: "234545",
    Driver_ID: "",
    Attendant_ID: "",
    Assisting_ID: "",
    Vehicle_ID: "",
    Vehicle_Status: "",
};

const callTransactionSlice = createSlice({
    name: "callTransaction",
    initialState: { value: initialStateValue },
    reducers: {
        saveCallTransaction: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { saveCallTransaction } = callTransactionSlice.actions;

export default callTransactionSlice.reducer;