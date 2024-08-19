import  {createSlice } from '@reduxjs/toolkit'

export const cwppSlice = createSlice({
    initialState: {
        widgets: [
            {
                name:"Top 5 Namespace Specific Alerts"
            },
            {
                name:"Workload Alerts"         
            }
        ]
    },
    name: "CWPP Dashboard",
    reducers:{
        addCwpp: (state, action)=>{
            state.widgets.push({name: action.payload});
        },
        removeCwpp: (state,action)=>{
            state.widgets = state.widgets.filter((widget) => widget.name !== action.payload)
        }
    }
})

export const  { addCwpp, removeCwpp } = cwppSlice.actions;
export default cwppSlice.reducer;