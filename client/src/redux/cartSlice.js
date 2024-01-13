import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[]

};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct:(state,action)=>{
      const product=state.products.find((product)=>product.id===action.payload.id)

      if(product){
        product.quantity+=action.payload.quantity
      }else{
        state.products.push(action.payload)
      }
    },
    removeProduct:(state,action)=>{
      state.products=state.products.filter((product)=>product.id!==action.payload.id)
    }
  },
});

export const { addProduct,removeProduct,emptyCart,toggleShowCart } = cartSlice.actions;

export default cartSlice.reducer; // Export the slice as the default export
