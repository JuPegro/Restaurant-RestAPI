import { Router } from "express";
import {
  getBoards,
  createNewBoard,
  getBoardById,
  deleteBoardById,
  getTotalCount,
  updateBoardById
} from "../controllers/boards.controller.js";

const router = Router();

router.post("/board", createNewBoard);

router.put("/board/:Id", updateBoardById);

router.get("/board", getBoards);

router.get("/board/count", getTotalCount);

router.get("/board/:Id", getBoardById);

router.delete("/board/:Id", deleteBoardById);

//router.get("/board", getBoardOrden);

//router.checkout("/board", changeStatus);

export default router;
