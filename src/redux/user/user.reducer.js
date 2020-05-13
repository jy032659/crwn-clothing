const INITIAL_STATE={
currentUser:null
}

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