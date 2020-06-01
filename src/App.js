import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);














// //before 189.
// //85.this component is from functional class to class component
// //for auth purpose
// class App extends React.Component {
// // constructor(){
// // super();
// // this.state={
// //   currentUser:null
// // }
// // }     //deleted in 106

// unsubscribeFromAuth=null;


// componentDidMount(){ 
//   //85. fetch data to back-end from firebase
//   //  console.log(this.props)


// this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{ //90 async added in, 92 to indicate whether user log in or logout
//  if(userAuth){
// const userRef=await createUserProfileDocument(userAuth);

// userRef.onSnapshot(snapShot=>{
//   setCurrentUser({ // here onSnapshot is like a listener, any delete, update will trigger it 
//     //modified in 106, here setCurrentUser is a function, the
//                   // object within it is the 'payload' parameter to be passed
// id: snapShot.id,
// ...snapShot.data()
//               //whenever our user snapshot updates we are setting 
//                 // the user reduce or value with our new object 
// })
// // console.log(this.state);
// });

//  }
//  setCurrentUser(userAuth) // log out, userAuth  is  null

// });
// }

// componentWillUnmount(){ //for closing subscription purpose
//   this.unsubscribeFromAuth();
// }

// render(){
// return (
//     <div >
// <Header />
//   <Switch>
// <Route exact path='/' component={HomePage} />
// <Route path='/shop' component={ShopPage}   />
// <Route exact path='/checkout' component={CheckoutPage}/>
// <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/' />):(<SignInAndSignUpPage />)} />
//   </Switch>
    
//     </div>
//   );

// }
  
// }

// // const mapDispatchToProps=dispatch=>(
// // { setCurrentUser:user=>dispatch(setCurrentUser(user))

// // }//106
// // )
// const mapStateToProps=createStructuredSelector( //from user.reducer we can see with connect()
//                                   // the parameter will return {user{currentUser}} 
//                 //data is firstly flowed through root-reducer->user.reducer
  
//   {
// currentUser:selectCurrentUser,

// })


// function mapDispatchToProps(dispatch){
// // in my opinion, once patching, action function can be used in anywhere within
// //current component,like setCurrentUse(),or like toggleCartHidden() in cart-icon 
// //component, and those functions are also contained in this.state.props, once
// //action (or called action function)is triggered, we will dispatch that new object
// //into our store, then through root reducer, target reducer will 
// // be executed to return a new object which
// // represents the  next state after firing action

//   return (
  
// {setCurrentUser :function (user){ // this.props is determined by this line
//                                     // still, setCurrentUser is a function to be used 
   
//     // console.log("this is set CurrentUser",(setCurrentUser(user)))
  
    
//     // in above line 34 or line 46, 
//                                     //that means whatever passed to setCurrentUser 
//                                     // in line 34 and 46, will be dispatched to user.reducer
//                                    // and fire the action
//   return( 
    
//   dispatch(setCurrentUser(user))
  
//   ) // this one is the function from user.actions
  
//   //after setCurrentUser(user), it will become an actual action object with 
//   //both type and payload, then we dispatch to the reducer to update the state                                



//                                   //after the first return, setCurrentUser will be 
//                                   //an action object,like 
//                                 //   {
//                                 //     type:'SET_CURRENT_USER',
//                                 //     payload: {id: "6rTzLsfZYGZ1diGh7XNgs0FC7Zg2", email: "z5133160@gmail.com", createdAt: t, displayName: "Tian Tan"}
//                                 //    }                 
//                                 //  then this action object will be dispatched(or updated to user.reducer) 
//                                 //  this. props.setCurrentUser is hence altered
// }

// }
// )}

// export default connect(mapStateToProps,mapDispatchToProps)(App);

// //If a mapStateToProps function is specified, 
// //the new wrapper component will subscribe to Redux store updates. 
// //This means that any time the store is updated, mapStateToProps will be called.
// // The results of mapStateToProps must be a plain object,
// // which will be merged into the wrapped component’s props. 
// //If you don't want to subscribe to store updates, 
// //pass null or undefined in place of mapStateToProps.
