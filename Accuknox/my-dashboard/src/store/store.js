import { configureStore } from '@reduxjs/toolkit'
import cspm from './Slices/cspmSlice'
import cwpp from './Slices/cwppSlice'
import registryScan from './Slices/registryScanSlice'

export const store = configureStore({
    reducer:{
        cspm,
        cwpp,
        registryScan
    },
})