import  {createSlice } from '@reduxjs/toolkit'

export const cspmSlice = createSlice({
    initialState: {
        widgets: [
            {
                name:"Cloud Accounts",
                data: [
                    {
                        label: "Connected",
                        count:2,
                        color: "#5578ff"
                    },
                    {
                        label: "Npt Connected",
                        count:2,
                        color: "#e1ebff"                 
                    }
                ]
            },
            {
                name:"Cloud Account Risk Assessment",
                data: [
                    {
                        label: "Failed",
                        count:1689,
                        color: "red"
                    },
                    {
                        label: "Warning",
                        count:681,
                        color: "yellow"                 
                    },
                    {
                        label: "Not available",
                        count:36,
                        color: "gray"                 
                    },
                    {
                        label: "passed",
                        count:7253,
                        color: "green"                 
                    }
                ]
            }
        ]
    },
    name: "CSPM Executive Dashboard",
    reducers:{
        addCspm: (state, action)=>{
            state.widgets.push(action.payload);
        },
        removeCspm: (state,action)=>{
            state.widgets = state.widgets.filter((widget) => widget.name !== action.payload)
        }
    }
})

export const  { addCspm, removeCspm } = cspmSlice.actions;
export default cspmSlice.reducer;