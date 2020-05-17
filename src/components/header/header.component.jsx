import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils' //87.authtication

const Header=({currentUser})=>(
<div className='header'>

<Link className='logo-container' to="/">
<Logo className='logo'/>
</Link>

<div className='options'>
<Link className='option' to="/shop">
SHOP
</Link>

<Link className='option' to="/shop">
CONTACT
</Link>

{currentUser ? //87 if it is a object, return true, if null, return false 
<div className='option' onClick={()=>auth.signOut()}>SIGN OUT </div>
:
<Link className='option' to='/signIn'>SIGN IN</Link>

}

</div>


</div>

)
//105. 
const mapStateToProps=state=>({  //this state is root reducer
    
currentUser:state.user.currentUser
})
export default connect(mapStateToProps)(Header); 

//The connect() function connects a React component to a Redux store.
//It does not modify the component class passed to it; instead, it 
//returns a new, connected component class that wraps the component you passed in.