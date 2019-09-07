// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
const theOneFunc = x =>{
console.log('Hello after '+x+' seconds');
};
setTimeout(theOneFunc, 4*1000,4);
setTimeout(theOneFunc, 8*1000,8);