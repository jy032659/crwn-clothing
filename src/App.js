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
const {setCurrentUser}=this.props

this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{ //90 async added in, 92 to indicate whether user log in or logout
 if(userAuth){
const userRef=await createUserProfileDocument(userAuth);

userRef.onSnapshot(snapShot=>{
setCurrentUser({ //modified in 106
currentUser:{
id: snapShot.id,
...snapShot.data()
}
})
// console.log(this.state);
});

 }
setCurrentUser(userAuth) // log out, user is set to be null
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

const mapDispatchToProps=dispatch=>(
{ setCurrentUser:user=>dispatch(setCurrentUser(user))

}//106

)
export default connect(null,mapDispatchToProps)(App);
