const INITIAL_STATE={
currentUser:null
}
//every reducer is just a function that takes the state and then it 
//takes an action and based on the action it determines whether 
//or not it needs to re-render 
//middleware is just wth that receive action objects before they reach the 
//root reducer,more like a visual representation of what action have done before,current
//and after 
const userReducer=(state=INITIAL_STATE, action)=>{  //one action only related to one reducer
                                //so we set default in in case there is no match
    switch(action.type){
   case 'SET_CURRENT_USER':
       return{
            ...state,
            currentUser:action.payload
       }

   default:
       return state;

    }
}

export default userReducer