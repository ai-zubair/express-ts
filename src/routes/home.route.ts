import { Router, Request, Response } from "express";

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

export { homeRouter }
