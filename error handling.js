function func(a,b){
  
    return a+b
}

console.log(func(37,5))

// here z is not defined and this is an error, in real life if such error happens the website will stop
// working and you would have to restart it, purpose is that code should not break
// but there is way to handle this 

function func1(a,b){
    try {
       console.log("before error")
       throw ('this is deliberate error')// a function to create a deliberate error
       console.log(z)
       console.log("after error")
    }
    catch(err){ // this is how you can output an error
        console.log("error is " + err)
    }
    return a+b
}

console.log(func1(37,5))


function sample(x,y,z){
  try{
    let g = Math.sqrt(x);
    let h = Math.sqrt(y);
    let q = Math.sqrt(z);
    
    return([g,h,q])
  }
  catch(err){
    console.log(err)
  }
    

}
console.log(sample(25,49,64))