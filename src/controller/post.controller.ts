import prisma from "../database/database";
import { Request,Response } from "express";
import bcrypt from 'bcrypt';

class PostController
{
   async create(request: Request,response: Response)
   {
    try{
        const {text} = request.body;
        const pos = await prisma.post.create({
            data: {
                text,
                author: {
                    connect: {
                        id: 3
                    }
                }
            },
        });
        console.log(pos);
        response.status(200).send(pos);
    }catch(err)
    {
        console.log(err);
        response.status(404).send(err);
    }
   }

   async test(request: Request,response: Response){
    console.log("Hey Hey");

    response.status(200).send('hey');
   }

   async FindAll(request: Request,response: Response)
   {
    try{
        const all = await prisma.post.findMany();

        console.log(all);
        response.status(200).send(all);
    }catch(err)
    {
        console.log(err);
        response.status(404).send(err);
    }
   }

}

export default new PostController();