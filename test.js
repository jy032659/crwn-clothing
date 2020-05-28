

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


// transformedCollection.reduce((accumulator,collection)=>{
//     accumulator[collection.title.toLowerCase()]=collection;
//     return accumulator
//   },{})

var numbers=[{
   id:1,
   title:'mens' 
},{id:2,
title:'womens'},{
    id:3,
    title:'jackets'
},{
    id:1,
    title:'hehe'
}];
const newNumber=numbers.reduce((accumulator,collection)=>{
   
accumulator[collection.id]=collection
return accumulator

},{})


const accumulator={furture:'unsure',current:'unsure'}
const collection={id:1,title:'hello',note:'test'}
const collectiontemp={id:3,title:'ho',note:'tt'}
accumulator[132]=12321;
console.log(accumulator)
accumulator["hehe"]=collection;
console.log(accumulator)
accumulator['1323']=collectiontemp;
console.log(accumulator)
accumulator['1323']="waniwoaanwo";
console.log(accumulator)


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

