import "core-js/proposals/promise-any";
import fetch from "node-fetch";

function messageDelay(msg, delay) {
    // Promise constructoren tager et callback
    return new Promise( (resolve, reject) => { // resolve og reject er callbacks
        setTimeout( () => {
            if(msg.length === 0) {
                reject('No message')
            }
            const upperCased = msg.toUpperCase();
            resolve(upperCased);
        }, delay )
    })
}


const promises = [
    messageDelay('Hi', 1300),
    messageDelay('Hi JP', 700),
    messageDelay('Hello world', 1700),
    messageDelay('Promises are cool', 300),
]


Promise.any(promises)
.then( (upperCased) => console.log(upperCased) )


Promise.all(promises)
.then( (upperCased) => console.log(upperCased) )
