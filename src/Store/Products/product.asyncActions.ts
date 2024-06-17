import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Config/axiosApi";

export const getData = createAsyncThunk('products/getData',async(_,thunkApi) =>{
    try{
        const response = await api.get('/products');
        await new Promise(resolve => setTimeout(resolve, 1000));
        return response.data;
    }
    catch(error){
        if(error instanceof Error){
            thunkApi.rejectWithValue(error.message)
        }
        else if(typeof error === 'string'){
            throw new Error(error)
        }
        else{
            thunkApi.rejectWithValue(undefined)
        }
    }
})