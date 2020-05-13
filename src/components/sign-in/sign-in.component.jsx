import React from 'react';

import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props){
super(props);
 this.state={
email:'',
password:''
 }
 
    }


    handleSubmit=async event=>{  //95 modified
        event.preventDefault();
        const {email,password}=this.state;
try{
    await auth.signInWithEmailAndPassword(email,password);
    this.setState({email:'',password:''})

}catch(error){
    console.log(error);
}

        
    }   
    



    handleChange= event=>{
        const{value,name}=event.target;
        
        this.setState({[name]:value})
    }

render(){
return (
<div className='sign-in'>
<h2>i already have an account</h2>
<span>Sign in with your email and password</span>

<form onSubmit={this.handleSubmit}>
<FormInput
name="email" 
type="email" 
handleChange={this.handleChange} 
value={this.state.email} required 
label="email"    
/>


<FormInput label="password"  name="password" type="password" value={this.state.password}  handleChange={this.handleChange} required />

<div className='buttons'>  {/* added in 87 to change the button layout*/}
<CustomButton type="submit" >Sign in</CustomButton>
<CustomButton onClick={signInWithGoogle} isGoogleSignIn>  
{/* 87.isGoogleSignIn will pass to button component as a object, which returns true */}

{''} 
Sign in with Google{''}
</CustomButton>
</div>

</form>

</div>

)
}
}
export default SignIn;