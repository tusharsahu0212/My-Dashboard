import  {createSlice } from '@reduxjs/toolkit'

export const registryScanSlice = createSlice({
    initialState: {
        widgets: [
            {
                name:"Image Risk Assessment",
                critical: 9,
                high: 150,
                medium: 400,
                low: 200,
                negligible: 20,
                noIssue: 3
            },
            {
                name:"Image Security Issue",
                critical: 2,
                high: 2,
                medium: 2,
                low: 1,
                negligible: 1,
                noIssue: 0          
            }
        ]
    },
    name: "Registry Scan",
    reducers:{
        addRegistryScan: (state, action)=>{
            state.widgets.push(action.payload);
        },
        removeRegistryScan: (state,action)=>{
            state.widgets = state.widgets.filter((widget) => widget.name !== action.payload)
        }
    }
})

export const  { addRegistryScan, removeRegistryScan } = registryScanSlice.actions;
export default registryScanSlice.reducer;