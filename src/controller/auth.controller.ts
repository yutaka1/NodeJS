import { Request, Response } from "express";
import { User } from "../entity/user.entity";
import { RegisterValidation } from "../validation/register.validation";
import { AppDataSource } from "../data-source";
import bycryptjs from "bcryptjs";

export const Register = async (req: Request, res: Response) => {
  const body = req.body;

  const {error} = RegisterValidation.validate(body);

  if (error){
    return res.status(400).send(error.details)
  }

  if(body.password !== body.password_confirm){
    return res.status(400).send({
      message: "Password's do not match."
    })
  }

  const repositry = AppDataSource.getRepository(User);

  // passwordの情報以外をクライアントに返す
  const {password, ...user} = await repositry.save({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    password: await bycryptjs.hash(body.password,10)
  });

  res.send(user);
}
