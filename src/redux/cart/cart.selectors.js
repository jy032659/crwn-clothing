import {createSelector} from 'reselect';

const selectCart=state=>state.cart;// to invoke following two functions,
//all function parameters is originated from here, e.g, 
//selectCartItemsCount(state) in cart-icon.component.jsx, the state
//is originated from here


export const selectCartItems=createSelector(
[selectCart],
cart=>cart.cartItems
)

export const selectCartHidden=createSelector( //120
    [selectCart],
    cart=>cart.hidden
)

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    cartItems=>
    cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity+cartItem.quantity,
0)
)

export const selectCartTotal=createSelector(
    [selectCartItems],
 cartItems=>
    cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity+cartItem.quantity*cartItem.price,
0) 

)

//2 arguments needs to be passed, the first one is 
//a collection so an array of input selectors
//the second argument is a function in which it will 
//return the value we want out of the selector