import express from "express";
import { authRouter } from "./routes/auth.route";
import { homeRouter } from "./routes/home.route";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./controllers/Login.controller";
import { AppRouter } from "./AppRouter";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
  name: 'auth',
  keys: ['x32ygdgu23d9327c']
}))

app.use('/',homeRouter)
app.use(AppRouter.getRouter())

app.listen(3000,()=>{
  console.log("Fired at http://localhost:3000")
});