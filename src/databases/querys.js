export const querys = {
    getAllHistory: "SELECT * FROM acronime ORDER BY id DESC",
    addNewHistory: "INSERT INTO acronime (Acronimo) VALUES (@Acronimo)"
}