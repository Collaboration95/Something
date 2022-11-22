
const { application } = require("express")
const express=require("express")
const app=express()
const path=require("path")
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.set("views", path.join(__dirname, 'views'));
app.set("view engine","ejs")

app.get('/',(req,res)=>{
    res.render('base')
})

app.get('/about',(req,res)=>{
    res.render("about")
})

app.get('/ps',(req,res)=>{
    res.render("problem")
})
app.get('/pd',(req,res)=>{
    res.render("DDW")
})
app.get('/math',(req,res)=>{
    res.render("MATH")
})
app.get('*',(req,res)=>{
    res.render("error")
})

app.listen(port,()=>{
    console.log("Listening at server 3000")
})