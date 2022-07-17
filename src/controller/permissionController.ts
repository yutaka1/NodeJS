import { Request, Response } from "express";
import { AppDataSource } from "../dataSource";
import { Permission } from "../entity/permissionEntity";


export const Permissions = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(Permission);

  res.send(await repository.find());
}