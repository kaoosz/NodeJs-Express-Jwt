import { Router } from "express";
import postcontroller from "../controller/post.controller";
import jwtAuth from "../middlewares/jwtAuth.middleware";
import verify from "../middlewares/verify.middleware";


const routes = Router();


routes.post('/user/:id/post',postcontroller.create);

routes.get('/test',postcontroller.test);

routes.use(jwtAuth);

routes.get('/post',
postcontroller.FindAll);

export default routes;