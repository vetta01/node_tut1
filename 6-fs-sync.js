// this is same as 
// const fs = require('fs')
// fs.readFileSync
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
                './content/first-second.txt',
                `Here is the content of both file : ${first}, ${second}`,
                {flag: 'a'},
                )