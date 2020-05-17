import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import{connect} from 'react-redux';//106
import{setCurrentUser} from './redux/user/user.actions'

//85.this component is from functional class to class component
//for auth purpose
class App extends React.Component {
// constructor(){
// super();
// this.state={
//   currentUser:null
// }
// }     //deleted in 106

unsubscribeFromAuth=null;


componentDidMount(){ //85. fetch data to back-end from firebase
   console.log(this.props.setCurrentUser)
const {setCurrentUser}=this.props 

this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{ //90 async added in, 92 to indicate whether user log in or logout
 if(userAuth){
const userRef=await createUserProfileDocument(userAuth);

userRef.onSnapshot(snapShot=>{
  setCurrentUser({ //modified in 106, here setCurrentUser is a function, the
                  // object within it is the 'payload' parameter to be passed
currentUser:{
id: snapShot.id,
...snapShot.data()
}                 //whenever our user snapshot updates we are setting 
                // the user reduce or value with our new object 
})
// console.log(this.state);
});

 }
 setCurrentUser(userAuth) // log out, userAuth  is  null

});
}

componentWillUnmount(){ //for closing subscription purpose
  this.unsubscribeFromAuth();
}

render(){
return (
    <div >
<Header />
  <Switch>
<Route exact path='/' component={HomePage} />
<Route path='/shop' component={ShopPage}   />
<Route path='/signin' component={SignInAndSignUpPage} />
  </Switch>
    
    </div>
  );

}
  
}

// const mapDispatchToProps=dispatch=>(
// { setCurrentUser:user=>dispatch(setCurrentUser(user))

// }//106
// )



function mapDispatchToProps(dispatch){
  
  return (
  
{setCurrentUser :function (user){ // this.props is determined by this line


  return(  
  dispatch(setCurrentUser(user))) //only this one is the function from user.actions
                                  // other setCurrentUser is just a object 
                                  //after the first return, setCurrentUser will be 
                                  //an action object,like 
                                //   {
                                //     type:'SET_CURRENT_USER',
                                //     payload: {id: "6rTzLsfZYGZ1diGh7XNgs0FC7Zg2", email: "z5133160@gmail.com", createdAt: t, displayName: "Tian Tan"}
                                //    }                 
                                //  then this action object will be dispatched(or updated to user.reducer) 
                                //  this. props.setCurrentUser is hence altered
}

}
)}

export default connect(null,mapDispatchToProps)(App);
