import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ErrorHandler } from './utils/ErrorHandler';
import { ImagesController } from './http/controllers/ImagesController';

import notificacoesRoute from './routes/notificacoes'
import horariosRoute from './routes/horarios'
import agendamentosRoute from './routes/agendamentos'
import clientesRoute from './routes/clientes'
import funcionariosRoute from './routes/funcionarios'
import authorsRoute from './routes/authors'
import booksRoute from './routes/books'
import authRoute from './routes/auth'

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const imagesController = new ImagesController();

app.use("/notificacoes", notificacoesRoute);
app.use("/horarios", horariosRoute);
app.use("/agendamentos", agendamentosRoute);
app.use("/clientes", clientesRoute);
app.use("/funcionarios", funcionariosRoute);
//livraria esqueleto
//não deletar
app.use("/authors", authorsRoute);
app.use("/books", booksRoute);
app.use("/auth", authRoute);
app.get("/images/:type/:id", imagesController.get)

app.use("*", (req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Invalid route"
    })
});

app.use(ErrorHandler.handleErrors)



export default app;