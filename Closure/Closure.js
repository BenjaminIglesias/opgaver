//variable
let myName = 'Benjamin'

function printName(){
    console.log(myName);
}

printName()

//function
const outer2 = "hello"

function outerFunc(outerVar) {

    return function innerFunc(innerVar){
        console.log("Outer " + outerVar)
        console.log("Inner " + innerVar)
        console.log("Total outter " + outer2)
   
    }
    
}

const newFunction = outerFunc('outside')
newFunction("Hello")

function fetchOuter(outerVar){
    fetch('url').then(()=>{
        console.log(url)
    })
}