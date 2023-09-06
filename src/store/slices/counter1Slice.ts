
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";


type Counter1State = {
    counter:number,
    loading:boolean,
    countries:any
}

const initialvalue :Counter1State ={
    counter:0,
    loading:false,
    countries:[]
}

export const setValueAsync = createAsyncThunk("counter1/setValueAsync",async () => {
    return (await axios.get("https://restcountries.com/v3.1/all")).data
})


const counter1Slice = createSlice ({
    name:"counter1",
    initialState:initialvalue,
    reducers:{
        increase:(state:Counter1State)=>{
            state.counter = state.counter+1
        },
        decrease:(state:Counter1State)=>{
            state.counter = state.counter-1
        }
    },
    extraReducers:builder=>{
        builder.addCase(setValueAsync.fulfilled,(state,action)=>{
            state.countries = action.payload
            state.loading = false

        }),
        builder.addCase(setValueAsync.rejected,(state,action)=>{
            state.countries = action.payload
            state.loading = false
        }),
        builder.addCase(setValueAsync.pending,(state)=>{
            state.loading =true
        })
    },
})


export const {increase,decrease} =counter1Slice.actions;
export const counter1Selector = (store:RootState)=>store.counter1Reducer
export default counter1Slice.reducer;