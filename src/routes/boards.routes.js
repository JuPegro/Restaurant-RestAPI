import { Router } from "express";
import { getBoards } from "../controllers/boards.controller.js";

const router = Router();

//router.post("/board", createBoards);

//router.put("/board", updateBoards);

router.get("/board", getBoards);

//router.get("/board", getBoardById);

//router.get("/board", getBoardOrden);

//router.checkout("/board", changeStatus);

export default router;
