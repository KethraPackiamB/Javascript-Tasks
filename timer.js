let timer=60;
console.log(timer);
const time= setInterval(()=>{
    timer -=1;
    console.log(timer);
    if(timer <= 0){
        clearInterval(time)
    }
},1000);