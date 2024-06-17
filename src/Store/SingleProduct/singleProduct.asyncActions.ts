import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Config/axiosApi";
import { Products } from "../../Static/type";

export const getSingleProductData = createAsyncThunk('singleProduct/getSingleProductData',async(slug:string,thunkApi) =>{
    try{
        const response = await api.get<Products[]>("/products");
        const findItem = response.data.filter((item) => {
            // console.log(typeof item.id)
            // return (item.id as string) === id
            return item.slug === slug
        })
        // console.log(response.data)
        console.log(findItem)
        if (findItem) {
            await new Promise(resolve => setTimeout(resolve, 700));
            return findItem.find((item) =>{
                return{
                    ...item,
                    count:item.count = 1
                }
            })
        } else {
            return thunkApi.rejectWithValue(`Product with id ${slug} not found`);
        }
    }
    catch(error){
        if(error instanceof Error){
            thunkApi.rejectWithValue(error.message)
        }
        else if(typeof error ==='string'){
            throw new Error(error)
        }
        else{
            thunkApi.rejectWithValue("Error")
        }
    }
})