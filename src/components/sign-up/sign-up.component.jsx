
//93.Sign up component

import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import{auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends React.Component{
constructor(){
super();

this.state={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
}

handleSubmit= async event=>{
    event.preventDefault();
    const{displayName, email, password, confirmPassword}=this.state;
    console.log("before user, the displayName is")
    console.log(displayName)
    if(password !== confirmPassword){
        alert("passwords don't match");
        return;
    }

    try{
        const {user}= await auth.createUserWithEmailAndPassword(email,password);
     console.log("user is ")
     console.log(user)
     // after test, user always has displayName and email element
     //but displayName returns null, it's strange 
     //answer: user.displayName returns null but this.state.displayName 
     //return the name we input~!
     console.log("this.state displayName is")
     console.log({displayName})
       await  createUserProfileDocument(user,{displayName});
       //user 包含email, password可能是以hash code 形式进行传递
       //相当于把email 和password传到user里，再调用firebase。utils，如果账户存在则直接返回，
       //不存在则创建一个新的object
this.setState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
})
    }catch(error){
        console.error(error);
    }
};

handleChange=event=>{
    const{name,value}=event.target;
    this.setState({[name]:value})
}

render(){
    const{displayName, email, password, confirmPassword}=this.state;

    return(<div className='sign-up'>
    <h2 className='title'>I do not have an account </h2>
    <span>Sign up with your email and password </span>

    <form className='sign-up-form' onSubmit={this.handleSubmit}>
    <FormInput  
    type='text'
    name='displayName'
    value={displayName}
    onChange={this.handleChange}
    label='Display Name'
    required
    />
 <FormInput  
    type='email'
    name='email'
    value={email}
    onChange={this.handleChange}
    label='Email'
    required
    />
    <FormInput  
    type='password'
    name='password'
    value={password}
    onChange={this.handleChange}
    label='Password'
    required
    />
     <FormInput  
    type='password'
    name='confirmPassword'
    value={confirmPassword}
    onChange={this.handleChange}
    label='Confirm Password'
    required
    />
<CustomButton type='submit'>SIGN UP</CustomButton>
    
    </form>
    </div>
    )
}

}

export default SignUp; 