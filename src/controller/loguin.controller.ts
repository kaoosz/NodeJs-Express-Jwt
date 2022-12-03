import { Request,Response } from "express";
import bcrypt, { compare } from 'bcrypt';
import prisma from "../database/database";
//import "dotenv/config";
import jsonwebtoken from "jsonwebtoken";
const authsecret = require("./auth");


require('dotenv').config();

class Loguin
{
    async loguin(request: Request,response: Response)
    {
        try{
            const {email,password} = request.body;

            const user = await prisma.user.findFirst({
                where: {
                    email,
                },
            });

            
            if(user != null){
                if(!await bcrypt.compare(password,user.password))
                    return response.status(400).send({error: 'User not found'});
                
                //const token = jsonwebtoken.sign({id: user?.id},authsecret.secret,{expiresIn: '7d'});

                return response.json({
                    token: jsonwebtoken.sign({id: user?.id},authsecret.secret,
                        {expiresIn: '7d'})
                })

                // return response.send({
                //     user,
                //     token,
                //     //token : {id : u.id},
                    
                // });
                //response.status(200).send({u,token});
            }
            
            //response.status(200).json(u);
        }catch(err)
        {
            console.log(err);
            response.status(404).send(err);
        }
    }

}


export default new Loguin();