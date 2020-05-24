
//103. the purpose of root-reducer is combing all reducers together
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'// storage is actually aa local storage
//object 

import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
const persistConfig={
    key:'root',
    storage,
    whitelist:['cart'] //contains the string name of any reducer that we want to store
}

const rootReducer= combineReducers({  //because it is a default value,
                                  // whenever we use it in other component, they can rename it  
    user:userReducer ,            //  state.user.currentUser,,because userReducer function
                           // returns {currentUser:......} ,, here state
                                // can represent the return value of combineReducer
                                //function
    cart:cartReducer  ,
    directory:directoryReducer ,
    shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer);