const getPool = require('../database/getPool');

const selectData = async () => {
  const pool = await getPool();
  const [data] = await pool.query(`SELECT * from jokes`);
  return data;
};

module.exports = selectData;
