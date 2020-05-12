function sleep (time) {
    return new Promise((resolve,reject) => {
        
        if(true)
        {setTimeout(()=>resolve(`i have successed ${time}`), time)}
        else{reject('i have failed')}
    
    });
  }

  (async function() {
    console.log('Do some thing, ' + new Date());
   await sleep(2000).then(value=>console.log(value));
     sleep(2000).then(value=>console.log(value));
    console.log('Do other things, ' + new Date());
   
  })();

