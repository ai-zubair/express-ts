import { Request, Response } from "express";
import { get, controller, use } from "../decorators";
import { authenticate } from "../middlewares/middlewares";

@controller("/auth")
class LoginController{

  @get("/login")
  @use([authenticate])
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