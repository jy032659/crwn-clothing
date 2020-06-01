import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer  >
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// const Header=({currentUser, hidden})=>(
// <div className='header'>

// <Link className='logo-container' to="/">
// <Logo className='logo'/>
// </Link>

// <div className='options'>
// <Link className='option' to="/shop">
// SHOP 
// </Link>

// <Link className='option' to="/shop">
// CONTACT 
// </Link>

// {currentUser ? //87 if it is a object, return true, if null, return false 
// <div className='option' onClick={()=>auth.signOut()}>SIGN OUT </div>
// :
// (<Link className='option' to='/signin'>SIGN IN</Link>)
// }
// <CartIcon />
// </div>

// {

//     hidden?null:<CartDropdown />  

// }
// {/* this is where we need to think about how to drop down or hide 
// not just within this component, but also think about how to hide or show
// in other component as well
// */}
// </div>

// )
// //105. 
// // const mapStateToProps=state=>({  //this state is root reducer
    
// // currentUser:state.user.currentUser
// // })

const mapStateToProps=createStructuredSelector({  //this state is root reducer
    
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
    })   //110 provided a more advanced way to destructure the object, original 
    // one is shown just above
 const mapDispatchToProps = dispatch => ({
      signOutStart: () => dispatch(signOutStart())
    });

export default connect(mapStateToProps,mapDispatchToProps)(Header); 

//The connect() function connects a React component to a Redux store.
//It does not modify the component class passed to it; instead, it 
//returns a new, connected component class that wraps the component you passed in.