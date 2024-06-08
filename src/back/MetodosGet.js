const connection = require('./db');

const getTabla = (req, res) => {
  const tableName = req.params.tableName;
  const sql = `SELECT * FROM ??`;

  connection.query(sql, [tableName], (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
      return;
    }
    res.json(results);
  });
};

const getTablaReferencia = (req, res) => {
  const { referencia } = req.query;
  const sql = `SELECT * FROM operacion WHERE referencia = ?`;

  connection.query(sql, [referencia], (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
      return;
    }
    res.json(results);
  });
};

const getVerTablaOperacion = (req, res) => {
  const sql = `CALL SelectOperacion()`;

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
      return;
    }
    res.json(results[0]);
  });
};

module.exports = {
  getTabla,
  getTablaReferencia,
  getVerTablaOperacion
};
