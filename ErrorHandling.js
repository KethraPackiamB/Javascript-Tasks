const demo =()=>{
let a = undefined;

try{
    console.log(a.name);
}
catch(error){
    console.log("Error has found");
}
}

const demo2 =()=>{

    try{
        num = prompt("Enter a Number:")
        console.log(num**2);
    }
    catch{
        console.log("Error has occurrred");
    }
    finally{
        console.log("Executed");
    }
}
demo();
demo2();