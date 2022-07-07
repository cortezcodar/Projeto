import { Request, Response } from "express";
import { UserModel } from "../database/models/usemodel";

class userscontroler{

  async findAll(req: Request, res: Response){
    const users = await UserModel.findAll();


    return users.length > 0?res.status(200).json(users):res.status(204).send
  }
  async findOne(req: Request, res: Response){
    const {usersId} = req.params;
    const users = await UserModel.findOne({
     where:{
      Id: usersId,
     },
    });
    return users ? res.status(200).json(users) : res.status(204).send()

  }
  async create(req: Request, res: Response){
    const{ novoEmail, nome, idade} = req.body;
    const users = await UserModel.create({
     email: novoEmail,
     nome: nome,
     idade: idade,
    });

   
    return res.status(201).json(users);
  }
  async update (req: Request, res: Response){}
  async delete (req: Request, res: Response){}
};


export default new userscontroler();