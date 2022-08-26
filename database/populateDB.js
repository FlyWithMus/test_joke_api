require('dotenv').config();
const data = require('./data.json');
const getPool = require('./getPool');
console.log(data);

const populateDB = async () => {
  try {
    const connection = await getPool();
    for (i = 0; i < data.length; i++) {
      await connection.query(
        `INSERT INTO jokes ( type, setup, punchline) VALUES(?,?,?);`,
        [data[i].type, data[i].setup, data[i].punchline]
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    process.exit;
  }
};

populateDB();
