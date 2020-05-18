
//103. the purpose of root-reducer is combing all reducers together
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({  //because it is a default value,
                                  // whenever we use it in other component, they can rename it  
    user:userReducer ,            //  state.user.currentUser,,because userReducer function
                           // returns {currentUser:......} ,, here state
                                // can represent the return value of combineReducer
                                //function
    cart:cartReducer   
})