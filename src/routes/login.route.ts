import { Router, Request, Response } from "express";

const loginRouter = Router();

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
  .post((req: Request, res: Response): void =>{
    const { email, password } = req.body;
    res.send({
      email,
      password
    })
  })

export { loginRouter }