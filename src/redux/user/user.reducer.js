import UserActionTypes from "./user.types"

const INITIAL_STATE={
currentUser:null,
error:null
}
//every reducer is just a function that takes the state and then it 
//takes an action and based on the action it determines whether 
//or not it needs to re-render 
//middleware is just wth that receive action objects before they reach the 
//root reducer,more like a visual representation of what action have done before,current
//and after 

//one action only related to one reducer
                                //so we set default in in case there is no match
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;