import { Router, Request, Response } from "express";

const loginRouter = Router();

interface RequestWithBody extends Request{
  body: { [key:string]: string|undefined }
}

loginRouter.route("/")
  .get((req: Request, res: Response): void=>{
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
  })
  .post((req: RequestWithBody, res: Response): void =>{
    const { email, password } = req.body;
    if(email && password && email === "x@x.com" && password === "123" && req.session){
      req.session.isAuthenticated = true;
      res.redirect('/');
    }else{
      res.send("Invalid email/password")
    }
  })

export { loginRouter }