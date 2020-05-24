

// function sleep (time) {
//     return new Promise((resolve,reject) => {
        
//         if(true)
//         {setTimeout(()=>resolve(`i have successed ${time}`), time)}
//         else{reject('i have failed')}
    
//     });
//   }

//   (async function() {
//     console.log('Do some thing, ' + new Date());
//    await sleep(2000).then(value=>console.log(value));
//      sleep(2000).then(value=>console.log(value));
//     console.log('Do other things, ' + new Date());
   
//   })();


const COLLECTION_ID_MAP={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}
const collection={
hats:"hat1",
sneakers:"sneakers2",
jackets:"jackets3",
    womens:"womens4",
    mens:"mens5"

}
console.log(Object.keys(COLLECTION_ID_MAP).map(key=>collection[key]))


// const mapDispatchToProps=dispatch=>(
// { setCurrentUser:user=>dispatch(setCurrentUser(user))

// }//106
// )

// function mapDispatchToProps(dispatch){
  
//   return (
  
// {setCurrentUser :function (user){
// return(  
//   dispatch(setCurrentUser(user))) //only this one is the function from user.actions
//                                   // other setCurrentUser is just a object 
// }

// }
// )}

