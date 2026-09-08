//events is a built in module used to create and handle events in js
const EventEmitter = require("events");
const myemitter = new EventEmitter();
myemitter.on("greet", () => {
    console.log("Hello!");
});

myemitter.emit("greet");