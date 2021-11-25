const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

// app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '00010011',
    database: 'nodemysql2'
})

conn.connect(function(err) {

    if(err) {
        console.log(err)
    }

    console.log('Conectou ao MySQL')

    app.listen(3000)
})