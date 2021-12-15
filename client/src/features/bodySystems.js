import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [{
        label: 'Cardiovascular',
        value: 'cardiovascular',
        checked: false,
    },
    {
        label: 'Central Nervous System',
        value: 'centralNervousSystem',
        checked: false,
    },
    {
        label: 'Endocrine',
        value: 'endocrine',
        checked: false,
    },
    {
        label: 'GI',
        value: 'GI',
        checked: false,
    },
    {
        label: 'Integumentary',
        value: 'integumentary',
        checked: false,
    },
    {
        label: 'Musculoskeletal',
        value: 'musculoskeletal',
        checked: false,
    },
    {
        label: 'Renal',
        value: 'renal',
        checked: false,
    },
    {
        label: 'Reproductive',
        value: 'reproductive',
        checked: false,
    },
    {
        label: 'Respiratory',
        value: 'respiratory',
        checked: false,
    },
];

const bodySystemsSlice = createSlice({
    name: "bodySystems",
    initialState: { value: initialStateValue },
    reducers: {
        storeBodySystems: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { storeBodySystems } = bodySystemsSlice.actions;

export default bodySystemsSlice.reducer;