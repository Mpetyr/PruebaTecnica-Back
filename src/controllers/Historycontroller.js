import { getConnection, sql, querys } from "../databases";


//Obtener todos los datos

export const getAcronimeHistory = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllHistory);
        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Crear nuevo dato historico

export const createAcronimeHistory = async (req, res) => {

    //const { Acronimo, Fecha } = req.body
    console.log(req.body)
    if (req.body.acronimo == null) {
        return res.status(400).json({ msg: 'Bad Request. Please fill at fields' })
    }

    try {
        const pool = await getConnection()
        await pool.request()
            .input("Acronimo", sql.VarChar, req.body.acronimo)
            .query(querys.addNewHistory);

        return res.status(200).json("Guardado Exitoso")
    } catch (error) {
        res.status(500);
        res.send(error.message);
        throw error
    }
}
