const http = require('http')
const login = require('./pages/components/login')
const register = require('./pages/components/register')
const fs = require('fs')
const {getData, insertData,getDataUsername} = require('./services/db.js')



const PORT = 8000


const serveur = http.createServer(async(req,res)=>{
    if(req.url ==='/'){
        const content = login
        res.setHeader('Content-Type','text/html')
        res.statusCode = 200
        let html = fs.readFileSync('./index.html','utf-8')
        html = html.replace('{{content}}',content)
        res.end(html)
    }
    if(req.url ==='/register'){
        const content = register
        res.setHeader('Content-Type','text/html')
        res.statusCode = 200
        let html = fs.readFileSync('./index.html','utf-8')
        html = html.replace('{{content}}',content)
        res.end(html)
    }
    if(req.url === '/db'){
       getData(req,res)
    }
    if(req.url === '/insert'){
        insertData(req,res)
     }
     if(req.url === '/username'){
        getDataUsername(req,res)
     }
})

serveur.listen(PORT,()=>{
    console.log(`Serveur run on http://127.0.0.1:${PORT}`);
})