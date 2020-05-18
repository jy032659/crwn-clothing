import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

//second step is then adding {toggleCartHidden} for updating purpose
// third step is adding cartreducer to root reducer
const CartIcon=({toggleCartHidden})=>(

<div className='cart-icon' onClick={toggleCartHidden}> 
<ShoppingIcon className='shopping-icon'/>
<span className='item-count'>0</span>

</div>
)

const mapDispatchToProps=dispatch =>({
toggleCartHidden:()=>dispatch(toggleCartHidden())
});     //first step is to write this function 



export default connect(null,mapDispatchToProps)(CartIcon)