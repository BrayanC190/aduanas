const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'Aduana'
});

connection.connect(err => {
  if (err) {
    console.error('Error conectándose a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

module.exports = connection;
