import React from 'react';
import './custom-buttom.styles.scss'

const CustomButton=({children,isGoogleSignIn, inverted, ...otherProps})=>( //isGoogleSignIn and relevent code are added in 87
<button className={` ${inverted? 'inverted':''}  ${isGoogleSignIn? 'google-sign-in':''} custom-button`} {...otherProps}>
{children}
</button>

)
export default CustomButton