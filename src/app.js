import express, { json } from "express";
import boardRoutes from "./routes/boards.routes.js";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));

//AYUDA A QUE LOS MIDDLEWARES UTILICEN FORMATOS JSON
app.use(express.json());
//AYUDA A RECIBIR DATOS QUE VIENEN DESDE FORMULARIOS
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", boardRoutes);

export default app;
