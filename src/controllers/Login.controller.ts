import { Request, Response } from "express";
import { get, controller, use, post } from "../decorators";
import { authenticate } from "../middlewares/middlewares";

interface RequestWithBody extends Request{
  body: { [key:string]: string|undefined }
}

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

  @post("/login")
  postLogin(req: RequestWithBody, res: Response): void {
    const { email, password } = req.body;
    if(email && password && email === "x@x.com" && password === "123" && req.session){
      req.session.isAuthenticated = true;
      res.redirect('/');
    }else{
      res.send("Invalid email/password")
    }
  }

  @get('/logout')
  @use([authenticate])
  getLogout(req: Request, res: Response): void {
    req.session = null;
    res.redirect('/auth/login')
  }
}

export { LoginController }