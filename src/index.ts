import express from "express";

const app = express();

app.get('/',(req,res)=>{
  res.send(`
    <div>
      Hello There!
    </div>
  `);
})

app.listen(3000,()=>{
  console.log("Fired at http://localhost:3000")
})