// try catch and async - await || use promise

export default (func)=>(req,res,next)=>
Promise.resolve(func(req,res,next)).catch(next);

//big promise is a function that takes in 3 parameters, return a promise which on resolving retun 3 values or an error 
//if catch