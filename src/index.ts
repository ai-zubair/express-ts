import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";
import "./controllers/Login.controller";
import "./controllers/Home.controller";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
  name: 'auth',
  keys: ['x32ygdgu23d9327c']
}))
app.use(AppRouter.getRouter())

app.listen(3000,()=>{
  console.log("Fired at http://localhost:3000")
});