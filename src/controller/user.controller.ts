import prisma from "../database/database";
import { Request,Response } from "express";
import bcrypt from 'bcrypt';

class UserController
{
    async FindAll(request: Request,response: Response)
    {
        try{
            const find = prisma.user.findMany();
            response.status(200).json(find);
        }catch(err)
        {
            console.log(err);
            response.status(404).send(err);
        }
    }

    async create(request: Request,response: Response)
    {
        try{
            const {name,email,password} = request.body;
            const hash = await bcrypt.hash(password,10);

            const novo = await prisma.user.create({
                data: {name,email,password:hash},
            });
            
            response.status(200).json(novo);

        }catch(err)
        {
            console.log(err);
            response.status(404).send(err);
        }
    }

    async update(request: Request,response: Response)
    {
        try{
            const{name,email,password} = request.body;

            const upd = await prisma.user.update({
                where: {
                    id: 1
                },
                data: {email,name,password}
            });
        }catch(err)
        {
            console.log(err);
            response.status(404).send(err);
        }
    }
    
    async delete(request: Request,response: Response)
    {
        try{
            const {id} = request.params;

            const del = await prisma.user.delete({
                where: {
                    id : parseInt(id)
                },
            });
            
            del.password = "";
            response.status(200).send(del);

        }catch(err)
        {
            console.log(err);
            response.status(404).send(err);
        }
    }
}

export default new UserController();