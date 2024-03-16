import { getConnection } from "../database/connection.js ";

export const getBoards = async (req, res, next) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM Board");
  res.json(result.recordset);
};
