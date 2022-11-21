import sql from 'mssql'

const dbSettings = {
    user: "sa",
    password: "123456789",
    server: "localhost",
    database: "historial",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

export async function getConnection() {

    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error)
    }
}

export {sql};

