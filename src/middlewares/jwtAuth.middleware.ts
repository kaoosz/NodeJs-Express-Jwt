import { Response, NextFunction } from "express";
import IUserIdRequest from "../@types/express";
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
const authsecret = require("../controller/auth");

const jwtAuth: any = async (
    request: IUserIdRequest,
    response: Response,
    next: NextFunction
) => {

    const secret = process.env.secret;
    console.log('secret');
    console.log(authsecret.secret);
    
    const authHeader = request.headers.authorization;
    
    if(!authHeader) return response.status(401).json({error: 'Invalid Token 1'});

    console.log(request);
    const token = authHeader.split(' ')[1];

    try {
        if (authsecret.secret){
            const decoded = jwt.verify(token,authsecret.secret) as any;

            console.log(token);
            console.log(request.userId);
            console.log(decoded.id);
            console.log('FOI');

            return next();
        }
    }catch(err)
    {
        return response.status(404).json({error : 'token invalid catch'});
    }

}

export default jwtAuth;