const http = require('http')
const navbar = require('./pages/components/navbar')
const sql = require('mysql')
const {getData, insertData} = require('./services/db.js')



const PORT = 8000


const serveur = http.createServer(async(req,res)=>{
    if(req.url ==='/'){
        res.setHeader('Content-Type','text/html')
        res.statusCode = 200
        res.end(navbar)
    }
    if(req.url === '/db'){
       getData(req,res)
    }
    if(req.url === '/insert'){
        insertData(req,res)
     }
})

serveur.listen(PORT,()=>{
    console.log(`Serveur run on http://127.0.0.1:${PORT}`);
})