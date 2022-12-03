import { Router } from "express";
import loguinController from "../controller/loguin.controller";
import userController from "../controller/user.controller";


const routes = Router();


// Loguin
routes.post('/loguin',loguinController.loguin);


// User
routes.get('/user',userController.FindAll);
routes.post('/user',userController.create);
routes.delete('/user/:id',userController.delete);


export default routes;