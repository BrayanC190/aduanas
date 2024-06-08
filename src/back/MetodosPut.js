const connection = require('./db');

const updateOperacion = (req, res) => {
  const {
    referencia,
    cliente_id,
    exportador_id,
    receptor,
    operador_id,
    pais_exporta,
    puerto_origen,
    puerto_destino,
    aduana_ingreso,
    mercancia_id,
    estatus,
    buque_id,
    fecha_envio,
    fecha_llegada,
    flete,
    forma_pago,
    pais_origen_mercancia,
    estado_entrega,
    ciudad_entrega,
    terminal_origen_id,
    naviera_id,
    transportista_id,
    vehiculo_id,
    bl
  } = req.body;

  const sql = `CALL UpdateOperacion(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    referencia,
    cliente_id,
    exportador_id,
    receptor,
    operador_id,
    pais_exporta,
    puerto_origen,
    puerto_destino,
    aduana_ingreso,
    mercancia_id,
    estatus,
    buque_id,
    fecha_envio,
    fecha_llegada,
    flete,
    forma_pago,
    pais_origen_mercancia,
    estado_entrega,
    ciudad_entrega,
    terminal_origen_id,
    naviera_id,
    transportista_id,
    vehiculo_id,
    bl
  ];

  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error('Error ejecutando el proceso:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
      return;
    }

    res.json({ message: 'Operación actualizada exitosamente' });
  });
};

module.exports = {
  updateOperacion,
};
