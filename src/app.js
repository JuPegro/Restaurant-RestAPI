import cors from "cors";
import morgan from "morgan";
import express, { json } from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerSpecs from './swaggerConfig.js'
import boardRoutes from "./routes/boards.routes.js";

const app = express();


app.use(cors());
app.use(morgan("dev"));

//AYUDA A QUE LOS MIDDLEWARES UTILICEN FORMATOS JSON
app.use(express.json());
//AYUDA A RECIBIR DATOS QUE VIENEN DESDE FORMULARIOS
app.use(express.urlencoded({ extended: false }));

app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/api/v1/', boardRoutes);

export default app;
