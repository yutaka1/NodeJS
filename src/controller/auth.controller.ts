import { Request, Response } from "express";
import { User } from "../entity/user.entity";
import { RegisterValidation } from "../validation/register.validation";
import { AppDataSource } from "../data-source";
import bycryptjs from "bcryptjs";
import {sign, verify} from "jsonwebtoken";
import { Repository } from "typeorm";

export const Register = async (req: Request, res: Response) => {
  const body = req.body;

  // バリデーションの確認
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

  const {password, ...user} = await repositry.save({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    password: await bycryptjs.hash(body.password,10)
  });

  res.send(user);
}

export const Login = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(User);
  const body = req.body;

  const user = await repository.findOne({
    where: {
      email: body.email
    }
  });

  if(!user){
    return res.status(404).send({
      message: 'user not found!'
    })
  }

  if(!await bycryptjs.compare(body.password, user.password)){
    return res.status(400).send({
      message: 'invalid credentials!'
    })
  }

  const payload = {
    id: user.id
  }

  const token = sign(payload, process.env.SECRET_KEY);

  res.cookie('jwt', token,{
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1day
  });

  res.send({
    message: 'success'
  });
}

export const AuthenticatedUser = async (req: Request, res: Response) => {
  const {password, ...user} = req['user'];
  
  res.send(user);
}

export const Logout = async (req: Request, res: Response) => {
  res.cookie('jwt', '', {maxAge: 0});

  res.send({
    message: 'success'
  });
}