import { Router, Request, Response } from "express";
import { authenticate } from './middlewares'

const homeRouter = Router();

homeRouter.route('/')
  .get((req:Request, res: Response): void=>{
    if(req.session && req.session.isAuthenticated){
      res.send(`
        <div>
          <p>You're Logged In</p>
          <a href="/auth/logout">Log Out</a>
        </div>
      `)
    }else{
      res.redirect('/auth/login')
    }
  })

homeRouter.route('/protected')
  .get(authenticate,(req:Request, res:Response)=>{
    res.send("Youre viweing protected info")
  })

export { homeRouter }
