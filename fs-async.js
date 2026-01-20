const {writeFileSync, readFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


writeFileSync('./content/result.txt', 'hello world this is new created file with nodejs');