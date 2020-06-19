import { Request, Response } from "express";
import { get, controller, use } from "../decorators";
import { authenticate } from '../middlewares/middlewares'

@controller("")
class HomeController{

  @get("/")
  getHome(req:Request, res: Response): void{
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
  }

  @get('/protected')
  @use([authenticate])
  getProtected(req:Request, res:Response): void{
    res.send("Youre viweing protected info")
  }
}

