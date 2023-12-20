//requesting express
const express = require('express')

//instace app with express
const app = express();

//get domain root / with req & res
app.get('/', (req, res) =>{
    //res.send => return an html
    res.send('<h1>My task list</h1>')
})

//init server, listen 3000
app.listen(3000, () =>{
    //return when server is online
    console.log('Server initialized')
})

//install nodemon => monitoring files, if modified restart server
//to see changes

//run => npx nodemon 

