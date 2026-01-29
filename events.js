const EventEmitter = require('events');

const customEmmitter = new EventEmitter();

customEmmitter.on('order', ()=>{console.log("order received")});
customEmmitter.emit('order');