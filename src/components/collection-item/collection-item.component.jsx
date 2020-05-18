import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'


import './collection-item.styles.scss';
const CollectionItem=({item,addItem})=>{//whole structure has been modified 
    // because we need item property to be added into the cart item array
const {name,price,imageUrl}=item;
return( //addItem func added in 112
<div className='collection-item'>

<div className='image' style={{backgroundImage:`url(${imageUrl})`}}>
</div>

<div className='collection-footer'>
<span className='price'>{name}</span>
<span className='price'>{price}</span>
</div>

<CustomButton onClick={()=>addItem(item)} inverted> Add to Cart </CustomButton> 

</div>
);
}


const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);