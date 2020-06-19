import { Request, Response } from "express";
import { get, controller } from "../decorators";

@controller("/auth")
class LoginController{

  @get("/login")
  getLogin(req: Request, res: Response): void{
    if(req.session && req.session.isAuthenticated){
      res.redirect("/");
    }else{
      res.send(`
        <form method="POST">
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
          </div>
          <button>Submit</button>
        </form>
    `)
    }
  }

}

export { LoginController }