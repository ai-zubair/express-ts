import express from "express";
import { loginRouter } from "./routes/login.route";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
  name: 'auth',
  keys: ['x32ygdgu23d9327c']
}))
app.use('/login',loginRouter)

app.listen(3000,()=>{
  console.log("Fired at http://localhost:3000")
});