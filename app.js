const express = require('express');
const app = express();

const index= require("./routes/index")

app.set("view engine","ejs");

app.use(express.static("public"));
const series = [
    {
      id: 1,
      nome: 'Irmão do Jorel'
    },
    {
      id: 2,
      nome: 'Um maluco no pedaço'
    }
  ]


  /*let i= series.find(seri => seri.id===2)
  console.log(i.nome)*/

app.get("/serie/:id",(req,res)=>{
   let {id}= req.params 
      
let idd= series.find(seri => seri.id==id)
res.send(idd)


})
app.use("/",index)


app.listen(8666,()=>{
    console.log("rodando")
})