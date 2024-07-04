import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Products } from "../../Static/type";

type InitialState = {
    cartData:Products[],
}

const initialState: InitialState = {
    cartData:[],
}

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        changeCartCount: (state, action: PayloadAction<{ data: Products, newCount: number }>) => {
            const { data, newCount } = action.payload;
            const itemIndex = state.cartData.findIndex(item => item.id === data.id);
            if (itemIndex === -1) {
                state.cartData.push({ ...data, count: newCount });
            } else {
                state.cartData[itemIndex].count = newCount;
            }
        },
        removeItem:(state,action:PayloadAction<string>) =>{
            state.cartData =state.cartData.filter((item) =>{
                return item.id !== action.payload
            })
        },
        handleTotalPirce:(state,action:PayloadAction<number>) =>{
            // state.cartData =state.cartData.map((item) =>{
            //     return{
            //         ...item,
            //         newPrice:action.payload * item.price
            //     }
            // })
            state.cartData = state.cartData.reduce((acc, item) => {
                acc.push({
                    ...item,
                    newPrice: action.payload * item.price,
                });
                return acc;
            }, [] as Products[]);
        },
        removeAll:(state) =>{
            state.cartData = [];
        }
    }
})

export default CartSlice.reducer
export const{changeCartCount,removeItem,removeAll,handleTotalPirce} = CartSlice.actions