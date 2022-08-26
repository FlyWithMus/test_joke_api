require('dotenv').config();

const getPool = require('./getPool');

const initDB = async () => {
  let connection;

  try {
    connection = await getPool();

    console.log('Deleting possible existing databases...');
    await connection.query('DROP TABLE IF EXISTS jokes');

    console.log('Creating tables...');

    await connection.query(`
    CREATE TABLE jokes( id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      type VARCHAR (200) NOT NULL,
      setup VARCHAR (1000) NOT NULL,
      punchline VARCHAR (1000));`);

    console.log('Table created successfully!');
  } catch (error) {
    console.log(error);
  } finally {
    process.exit;
  }
};

initDB();
