// async function of fs
const {readFile, writeFile} = require('fs')

// if we will not add utf-8 result will not be a string
readFile('./content/first.txt', (err, data) => {
    if(err){
        console.log(`Error: ${err}`)
    }else{
        console.log(data)
    }
})

readFile('./content/first.txt', 'utf-8', (err, data1) => {
    if(err){
        console.log(`Error: ${err}`)
    }else{
        const first = data1;
        readFile('./content/second.txt','utf-8', (err, data2) => {
            if(err){
                console.log(`Error reading second.txt: ${err}`)
            }
        const second = data2
            
        writeFile('./content/first-second-1.txt',
        `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(`Error writing: ${second}`)
            }else{
                console.log(`Here is the result: ${first}, ${second}`)
            }
        })
        })
         
    }
})