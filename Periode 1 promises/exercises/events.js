var events = require("events");
var eventEmitter = new events.EventEmitter();
const readline = require('readline');    

//create event handler
const startEngine = () => {
    console.log("Vroom Vroom.. Car has started");
}


eventEmitter.on('Key Turned',startEngine);

eventEmitter.emit("Key Turned");


//key event

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
    if(key.name === 'right'){console.log("turning right")}
    if(key.name === 'left'){console.log("turning left")}
    if(key.name === 'up'){console.log("moving forward")}
    if(key.name === 'down'){console.log("reversing")}
    if(key.name === 'space'){eventEmitter.emit("Key Turned")}
    
})