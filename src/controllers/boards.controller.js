import { getConnection, sql } from "../database/connection.js ";
import querys from "../database/querys.js";

export const getBoards = async (req, res, next) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllBoards);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewBoard = async (req, res, next) => {
  const { Quantity, Description } = req.body;
  let { Status } = req.body;

  if (Quantity == null || Description == null) {
    return res
      .status(400)
      .json({ message: "Bad Request. Please Fill all fields" });
  }

  if (!Status) Status = "Avaliable";

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("Quantity", sql.Int, Quantity)
      .input("Description", sql.VarChar, Description)
      .input("Status", sql.VarChar, Status)
      .query(querys.createNewBoard);

    res.json({ Quantity, Description, Status });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getBoardById = async (req, res, next) => {
  const { Id } = req.params;

  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id", Id)
      .query(querys.getBoardById);
    console.log(result);

    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalCount = async (req, res, next) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getTotalBoards);
    res.json(result.recordset[0]);
  } catch (error) {
    console.error("Error fetching total count:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteBoardById = async (req, res, next) => {
  const { Id } = req.params;

  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id", Id)
      .query(querys.deleteBoardById);

    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateBoardById = async (req, res, next) => {
  const { Id } = req.params;
  const { Quantity, Description, Status } = req.body;

  if (Quantity == null || Description == null || Status == null) {
    return res
      .status(400)
      .json({ message: "Bad Request. Please Fill all fields" });
  }

  try {
    const pool = await getConnection();
    pool
      .request()
      .input("Id", sql.Int, Id)
      .input("Quantity", sql.Int, Quantity)
      .input("Description", sql.VarChar, Description)
      .input("Status", sql.VarChar, Status)
      .query(querys.updateBoardById);
  
      res.json({Quantity, Description, Status})
  } catch (error) {
    console.error("Error fetching total count:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
