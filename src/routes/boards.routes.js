import { Router } from "express";
import {
  getBoards,
  createNewBoard,
  getBoardById,
  deleteBoardById,
  updateBoardById,
  changeStatusBoard,
} from "../controllers/boards.controller.js";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Board:
 *      type: object
 *      properties:
 *        quantity: 
 *          type: integer
 *          description: the quantity of board
 *        description:
 *          type: string
 *          description: import value
 *        status:
 *          type: string
 *          description: avalaible, progress, success
 *      required:
 *        - Quantity
 *        - Description
 *        - Status
 *      example:
 *        Quantity: 25
 *        Description: Right Board
 *        Status: Avaliable
*/

/**
 * @swagger
 * /api/v1/board:
 *  get:
 *    summary: You get all registered boards
 *    tags: [Board]
 *    responses:
 *      200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Board"
 *      404:
 *         description: NOT FOUND!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: NOT FOUND!
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Bad request, missing or invalid parameters!"
 *      500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Internal Server Error"
 * 
 */
router.get("/board", getBoards);

/**
 * @swagger
 * /api/v1/board:
 *  post:
 *    summary: You create a new board
 *    tags: [Board]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/Board'
 *    responses:
 *      200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Board"
 *      404:
 *         description: NOT FOUND!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: NOT FOUND!
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Bad request, missing or invalid parameters!"
 *      500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Internal Server Error"
 */
router.post("/board", createNewBoard);

/**
 * @swagger
 * /api/v1/board/{Id}:
 *  get:
 *    summary: You get a single table by its id
 *    tags: [Board]
 *    parameters:
 *      - in: path
 *        name: Id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Board Id
 *    responses:
 *      200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Board"
 *      404:
 *         description: NOT FOUND!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: NOT FOUND!
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Bad request, missing or invalid parameters!"
 *      500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Internal Server Error"
 *        
 */
router.get("/board/:Id", getBoardById);

/**
 * @swagger
 * /api/v1/board/{Id}:
 *  put:
 *    summary: You update a Board
 *    tags: [Board]
 *    parameters:
 *      - in: path
 *        name: Id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Board Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/Board'
 *    responses:
 *      200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Board"
 *      404:
 *         description: NOT FOUND!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: NOT FOUND!
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Bad request, missing or invalid parameters!"
 *      500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Internal Server Error"
 *        
 */
router.put("/board/:Id", updateBoardById);

/**
 * @swagger
 * /api/v1/board/{Id}:
 *  delete:
 *    summary: You delete a Board 
 *    tags: [Board]
 *    parameters:
 *      - in: path
 *        name: Id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Board Id
 *    responses:
 *      200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Board"
 *      404:
 *         description: NOT FOUND!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: NOT FOUND!
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Bad request, missing or invalid parameters!"
 *      500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Internal Server Error"
 *        
 */
router.delete("/board/:Id", deleteBoardById);


/**
 * @swagger
 * /api/v1/board/change-status/{Id}:
 *  put:
 *    summary: You update status Board
 *    tags: [Board]
 *    parameters:
 *      - in: path
 *        name: Id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Board Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            properties:
 *              Status:
 *                type: string
 *                description: avalaible, progress, success
 *          required:
 *            -Status
 *    responses:
 *      200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Board"
 *      404:
 *         description: NOT FOUND!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: NOT FOUND!
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Bad request, missing or invalid parameters!"
 *      500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Internal Server Error"
 *        
 */
router.put("/board/change-status/:Id", changeStatusBoard)

export default router;