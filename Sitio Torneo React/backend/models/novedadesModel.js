var pool = require("./bd"); //llamado datos BD

async function getNovedades() {
    var query = "select * from novedades";
    var rows = await pool.query(query);
        return rows;
    }

async function insertNovedades(obj){
    try {
        var query = "insert info novedades set ?";
        var rows = await pool.query(query,[obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {getNovedades, insertNovedades}