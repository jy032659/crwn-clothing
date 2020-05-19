import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

//second step is then adding {toggleCartHidden} for updating purpose
// third step is adding cartreducer to root reducer
const CartIcon=({toggleCartHidden,itemCount})=>(

<div className='cart-icon' onClick={toggleCartHidden}> 
<ShoppingIcon className='shopping-icon'/>
<span className='item-count'>{itemCount}</span>

</div>
)

const mapDispatchToProps=dispatch =>({ 
toggleCartHidden:()=>dispatch(toggleCartHidden())
});     //first step is to write this function 

const mapStateToProps= (state)=>({   //117
itemCount: selectCartItemsCount(state)//119, notice how the 'state' flows in cart.selector 
}) //this part code is called selector, because we only use small portion
// of the state, and every time the state changes, this part will be re-render 
//even nothing was changed in this part, so what we want is that  if nothing gets
//changed, we don't re-render this component, this is called memorization,
//which is the caching of the selectors value and we can achieve this memorization
//by using a library called Re-select 




export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)