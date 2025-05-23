const sayGoodbye=()=>{
    console.log("GoodBye");
}

const greeting = (name, callback) => {
    console.log(`Hello, ${name}`);
    callback();

}

greeting("Kethra", sayGoodbye);


const greet=()=>{
    console.log("Let's start the session");
}

const welcome=(callback,developer)=>{
    console.log(`Hello Everyone!, ${developer} is here to give us the Introduction about Javascript Programming! `);
    callback();
}
welcome(greet,"Kethra");

