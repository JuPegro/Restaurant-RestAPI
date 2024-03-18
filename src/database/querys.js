export default {
    getAllBoards: "SELECT * FROM Board",
    createNewBoard: "INSERT INTO Board (Cuantity, Description, Status) VALUES (@Quantity, @Description, @Status)",
    getBoardById: "SELECT * FROM Board WHERE Id = @Id",
    deleteBoardById: "DELETE FROM Board WHERE Id = @Id",
    updateBoardById: "UPDATE Board SET Cuantity = @Quantity, Description = @Description, Status = @Status WHERE Id = @Id"
}