const path = require('path')

//returns platform specific separator
console.log(path.sep)

//join a sequence of path segments using the platform specific separator
//adding any trailing forward slashed will be ignored
const filePath = path.join('/content//', '////subfolder//', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)