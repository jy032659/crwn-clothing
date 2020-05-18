export const addItemToCart=(cartItems,cartItemToAdd)=>{
const existingCartItem=cartItems.find(
cartItem=>cartItem.id===cartItemToAdd.id
);

if(existingCartItem){
return cartItems.map(cartItem=>
    cartItem.id===cartItemToAdd.id
    ?{...cartItem, quantity:cartItem.quantity+1}// ...cartItem means that all other props remain the same while update quantity
    : cartItem
    )
}
console.log("cartItemToAdd is ",cartItemToAdd )
return [...cartItems, {...cartItemToAdd, quantity:1}]
//...cartItemToAdd means that creating a new object with all original props remaining
//while adding the quantity props to that object
// for example,originally, when cartItemToadd is passed as an object,
// it is {id: 1, name: "Brown Brim", imageUrl: "httbrown-brim.png", price: 25}
// and if cartItemToadd is a new item, then through this line,
// it will be like {id: 1, name: "Brown Brim", imageUrl: "httbrown-brim.png", price: 25, quantity:1}
// and if it already exists, {...cartItem, quantity:cartItem.quantity+1} 
//will update the quantity of that item 
}