const http = require('http')
 
const server = http.createServer((req, res) => {
   if(req.url === '/')
       return res.end("Welcome to our home page")
   if(req.url === '/about')
       return res.end("Welcome to our about page")
  
   return res.end(`
   <h2>Oops</h2>
   <p>We can't find the requested page</p>
   `)
})

server.listen(3000)