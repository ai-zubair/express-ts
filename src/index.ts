import express from "express";
import { loginRouter } from "./routes/login.route";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use('/login',loginRouter)

app.listen(3000,()=>{
  console.log("Fired at http://localhost:3000")
});