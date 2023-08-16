// import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
// import StatusCode from "./utils/StatusCode";
// const initialState ={
//     data:[],
//     status:StatusCode.IDLE,
// };

// const productSlice = createSlice({
//     name:"products",
//     initialState,
//     reducers:{},

//         extraReducers:(builder)=>{
//             builder
//             .addCase(getProducts.pending,(state,action)=>{
//                 state.status=StatusCode.LOADING
//             })
//             .addCase(getProducts.fulfilled,(state,action)=> {
//                 state.status = StatusCode.IDLE
//             })
//             .addCase(getProducts.rejected,(state,action)=>{
//                 state.status = StatusCode.ERROR
//             })

//         }
        
//     })
// //cartSlice return 2 things actions,state(reducer)
// export const {fetchProducts} = productSlice.actions;//actions fn like add
// export default productSlice.reducer;//state

// export const getProducts = createAsyncThunk('products/get',async ()=> {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = data.json();
//     return result;
// })
// // export function getProducts(){
// //     return async function getProductsThunk(dispatch,getState){
// //         const data = await fetch("https://fakestoreapi.com/products");
// //         const result = data.json();
// //         dispatch(fetchProducts(result))
// //     }
// // }

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "./utils/StatusCode";

// ... rest of the code ...
const initialState ={
    data:[],
    status:StatusCode.IDLE,
};


export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json(); // Make sure to await here
    return result;
});

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = StatusCode.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = StatusCode.IDLE;
                state.data = action.payload; // Update state with fetched data
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = StatusCode.ERROR;
            });
    }
});

// ... rest of the code ...
//cartSlice return 2 things actions,state(reducer)
export default productSlice.reducer;//state

