// npm - global command comes with node
// Command to check its existence: npm --version

// Install package for this particular project i.e. local dependency
// Command : npm i <packageName>

// Install package globally which can be used in any project i.e. global dependency
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// There are tow ways to create it 
// 1. manual approach (create package.json in the root, create properties etc)
// 2. using npm command
    // 2.a npm init (step by step, press enter to skip)
    // 2.b npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

