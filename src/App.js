import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import {auth} from './firebase/firebase.utils'


//85.this component is from functional class to class component
//for auth purpose
class App extends React.Component {
constructor(){
super();
this.state={
  currentUser:null
}
}

unsubscribeFromAuth=null;


componentDidMount(){ //85. fetch data to back-end from firebase
this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
this.setState({currentUser:user});  // 
console.log(user);
})
}

componentWillUnmount(){ //for closing subscription purpose
  this.unsubscribeFromAuth();
}

render(){
return (
    <div >
<Header currentUser={this.state.currentUser}/>
  <Switch>
<Route exact path='/' component={HomePage} />
<Route path='/shop' component={ShopPage}   />
<Route path='/signin' component={SignInAndSignUpPage} />
  </Switch>
    
    </div>
  );

}

  
}

export default App;
