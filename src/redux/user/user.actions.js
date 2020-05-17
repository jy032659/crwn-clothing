export  const setCurrentUser =user =>({
   type:'SET_CURRENT_USER',
   payload:user    //user can be a object as well, and if user is a String, payload 
                     //will be a string as well
})

// function setCurrentUser(user){
//    return {
//       type:'SET-CURRENT-USER',
//       payload:user
//    }
// }
// export {setCurrentUser}

//above is the simplified form of below:
// function addTodo(text) {
//    return {
//      type: ADD_TODO,
//      text
//    }
//  }