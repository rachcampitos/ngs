


const abc=()=>{ setTimeout(()=>console.log("Hello after 0.5 seconds. Maybe!"),500)
}

for(let i = 0; i < 10 ; i ++){
  abc()
}
