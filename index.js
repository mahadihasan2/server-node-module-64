const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json())
 
app.get('/',(req,res)=>{
    res.send('Hello brother I am coming from Dhaka. And another form india')
})

app.get('/user', (req,res)=>{
    res.send('Hello from user')
})

app.get('/user1', (req,res)=>{
    res.send({id:1, name:'Abdur Rahim', job:'Officer'})
})

const users2 = [
    {id:1, name:'Purnima', email:'purnima21@gmail.com', job:'nayika'},
    {id:2, name:'Abul', email:'abul21@gmail.com', job:'naiok'},
    {id:3, name:'Imran', email:'imran21@gmail.com', job:'nayika'},
    {id:4, name:'Purnima', email:'purnima21@gmail.com', job:'nayika'},
    {id:5, name:'Purnima', email:'purnima21@gmail.com', job:'nayika'},
    {id:6, name:'Purnima', email:'purnima21@gmail.com', job:'nayika'}
]

app.get('/users2',(req,res)=>{
    res.send(users2)
})

app.get('/user/:id', (req,res)=>{
    console.log(req.params)
    const id = parseInt(req.params.id)
    const user = users2.find(u=>u.id === id)
    res.send(user)
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','apple','orange','banana'])
})

app.post('/user', (req,res)=>{
    console.log(req.body)
    res.send('post Method Success in Server')
})
app.listen(port,()=>{
    console.log('lissining to port', port)
})