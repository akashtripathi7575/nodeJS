const loadash = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = loadash.flattenDeep(items);

console.log(newItems);