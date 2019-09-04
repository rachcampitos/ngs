// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
const  sleep = (ms)=>new Promise(resolve=>(setTimeout(resolve,ms)))

async function demo(){
    for(i = 0;i<5;i++){
        console.log("Hello World")
        await sleep(1000)
    }
    console.log("Done");
    
}
demo()