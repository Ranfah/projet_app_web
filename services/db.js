
const mysql = require('mysql')

const db = mysql.createConnection({
    host:`localhost`,
    user:`faniry`,
    password:`123`,
    database:`admin`
})

const getData = (req,res)=>{
    const sql = 'SELECT * FROM user'
    db.query(sql,(err,data)=>{
        if(err) return res.end(JSON.stringify(err));
        return res.end(JSON.stringify(data));
    })

}
const insertData = (req,res)=>{
    const sql = 'INSERT INTO user(username,usermail,password) VALUES("vanessa","vanne@gmail.com","123456")'
    db.query(sql,(err,data)=>{
        if(err) return res.end(JSON.stringify(err))
        return res.end('ok')
    })
}
module.exports = {getData,insertData}


