import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item=> item.id !== action.payload)
        }

    }
})
//cartSlice return 2 things actions,state(reducer)
export const {add,remove} = cartSlice.actions;//actions fn like add
export default cartSlice.reducer;//state