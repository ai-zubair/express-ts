import express from "express";
import { loginRouter } from "./routes/login.route";

const app = express();

app.use('/login',loginRouter)

app.listen(3000,()=>{
  console.log("Fired at http://localhost:3000")
});