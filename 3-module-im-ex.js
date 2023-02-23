// NodeJS use commonJS library, every file is module (by default) 
const names = require('./3.1-names');
console.log(names);

sayHi = require('./3.2-utils');
console.log(sayHi);

data = require('./3.3-alternative-approach')
console.log(data)

//when you include any module it is executed so if any function is called in the module file
// it will be called when you inclue that module
require('./3.4-invoked-func')
sayHi('vetta')
sayHi(names.john)
 