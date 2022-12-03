import { NextFunction, Request,Response } from "express";
import Jwt from "jsonwebtoken";
const authsecret = require("../controller/auth");


const verify = (request:Request,response: Response,next: NextFunction) => {
    const authHeader = request.headers.authorization;
    console.log(authHeader);

    if(!authHeader) return response.status(401).send('no tem galantia');

    console.log('foi');
    console.log(authHeader.split(' ')[1]);

    const token = authHeader.split(' ')[1];

    console.log(request);

    // Jwt.verify(token,authsecret.secret,(err,decoded) => {
    //     if(err) return response.status(401).send({error : 'Token Invalid'});

    //     request.userId = decoded.id;
    // });
    // Jwt.verify(
    //     authHeader.split(' ')[1],
    //     authsecret.secret,
    //     (err, decoded) => {
    //         if (err) return response.status(403).send('invalid token');
            
    //     }


    // )

    next();
}

export default verify;