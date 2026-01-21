const EventEmitter = require('events');

const customEmmitter = new EventEmitter();

customEmmitter.on('response', ()=>{
    console.log('data received');
});

customEmmitter.emit('response');