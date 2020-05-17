

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


const hello=(user)=>{
  return ({Stringg:user,
    Numb:user   
  })
}
const y="xixix";
const change=()=>{return y}


const xix="hehe";
const lal="jejw"
const OBJECT={arrays:[1,2,3],
STRINGG:"heihei",
NUM:123,
FUNC: hello(y)
}

const {FUNC}=OBJECT;
var {NUM}=OBJECT;

console.log(FUNC)

function temp1(para){
  return {FUNC:change() }
}
console.log(temp1(xix))

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

