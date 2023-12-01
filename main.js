const http = require('http')

const PORT = 8000

const serveur = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain')
    res.statusCode = 200
    res.end('Serveur running...')
})

serveur.listen(PORT,()=>{
    console.log(`Serveur run on http://127.0.0.1:${PORT}`);
})