import express,{Express } from 'express';
import useroute from "./routes/user.routes";
import postroute from "./routes/post.routes";


class App
{
    express : Express;

    constructor()
    {
        this.express = express();
        this.middlewares();
        this.routes();
    }
    middlewares()
    {
        this.express.use(express.json());
    }
    routes()
    {
        this.express.use(useroute);
        this.express.use(postroute);
    }

}

export default new App().express;