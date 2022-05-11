import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: any = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")|| "")
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action){
      const itemIndex = state.cartItems.findIndex((item: any) => item.id === action.payload.id);
      if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity += 1;
      }else{
        const tempProduct = {...action.payload, cartQuantity: 1};
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        })
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    
    removeFromCart(state, action){
      const nextCartItems = state.cartItems.filter((cartItem: any) => cartItem.id !== action.payload.id);

      state.cartItems = nextCartItems

      toast.error("Product removed from cart", {
        position: "bottom-left",
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action){
      const itemIndex = state.cartItems.findIndex((cartItem: any) => cartItem.id === action.payload.id)

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartItems[itemIndex].cartQuantity = 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
  }
})

export const {addToCart, removeFromCart, decreaseCart} = cartSlice.actions;

export default cartSlice.reducer;


