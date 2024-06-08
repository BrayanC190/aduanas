const connection = require('./db');

const registro = (req, res) => {
  const { nombre, direccion, telefono, pais, estado, ciudad, Tabla } = req.body;
  const query = `INSERT INTO ?? (nombre, direccion, telefono, pais, estado, ciudad) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [Tabla, nombre, direccion, telefono, pais, estado, ciudad];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).json({ message: 'Error en el registrar' });
      return;
    }
    res.status(200).json({ message: 'registrado exitoso', id: results.insertId });
  });
};

const registroMercancia = (req, res) => {
  const { descripcion, peso_bruto, volumen, numero_bultos, numero_unidades, dimensiones, marcas, tipo_embalaje } = req.body;
  const query = `INSERT INTO mercancia (descripcion, peso_bruto, volumen, numero_bultos, numero_unidades, dimensiones, marcas, tipo_embalaje) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [descripcion, peso_bruto, volumen, numero_bultos, numero_unidades, dimensiones, marcas, tipo_embalaje];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).json({ message: 'Error en el registro de mercancia' });
      return;
    }
    res.status(200).json({ message: 'Mercancia registrada exitosamente', id: results.insertId });
  });
};

const registroBuque = (req, res) => {
  const { nombre, naviera_id } = req.body;
  const query = `INSERT INTO Buque (nombre, naviera_id) VALUES (?, ?)`;
  const values = [nombre, naviera_id];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).json({ message: 'Error en el registro de buque' });
      return;
    }
    res.status(200).json({ message: 'Buque registrado exitosamente', id: results.insertId });
  });
};

const registroTransportista = (req, res) => {
  const { nombre, telefono } = req.body;
  const query = `INSERT INTO transportista (nombre, telefono) VALUES (?, ?)`;
  const values = [nombre, telefono];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).json({ message: 'Error en el registro de transportista' });
      return;
    }
    res.status(200).json({ message: 'Transportista registrado exitosamente', id: results.insertId });
  });
};

const registroVehiculo = (req, res) => {
  const { matricula, transportista_id } = req.body;
  const query = `INSERT INTO vehiculo (matricula, transportista_id) VALUES (?, ?)`;
  const values = [matricula, transportista_id];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).json({ message: 'Error en el registro de vehiculo' });
      return;
    }
    res.status(200).json({ message: 'Vehiculo registrado exitosamente', id: results.insertId });
  });
};

const registroOperacion = (req, res) => {
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

  const sql = `INSERT INTO operacion (referencia, cliente_id, exportador_id, receptor, operador_id, pais_exporta, puerto_origen, puerto_destino, aduana_ingreso, mercancia_id, estatus, buque_id, fecha_envio, fecha_llegada, flete, forma_pago, pais_origen_mercancia, estado_entrega, ciudad_entrega, terminal_origen_id, naviera_id, transportista_id, vehiculo_id, bl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(sql, [
    referencia,
    cliente_id,
    exportador_id,
    receptor,
    operador_id || null,
    pais_exporta,
    puerto_origen,
    puerto_destino,
    aduana_ingreso || null,
    mercancia_id,
    estatus,
    buque_id || null,
    fecha_envio,
    fecha_llegada || null,
    flete,
    forma_pago,
    pais_origen_mercancia || null,
    estado_entrega,
    ciudad_entrega,
    terminal_origen_id,
    naviera_id || null,
    transportista_id || null,
    vehiculo_id || null,
    bl || null
  ], (err, results) => {
    if (err) {
      console.error('Error inserting into the database:', err);
      res.status(500).json({ message: 'Error al registrar la operación' });
      return;
    }

    res.status(200).json({ message: 'Operación registrada exitosamente' });
  });
};

const aumentoEstatus = (req, res) => {
  const { referencia, estatus } = req.body;
  const query = `UPDATE operacion SET estatus = ? WHERE referencia = ?`;
  const values = [estatus, referencia];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).json({ message: 'Error en la actualizacion del estatus' });
      return;
    }
    res.status(200).json({ message: 'Estatus actualizado exitosamente', id: results.insertId });
  });
};

module.exports = {
  registro,
  registroMercancia,
  registroBuque,
  registroTransportista,
  registroVehiculo,
  registroOperacion,
  aumentoEstatus,
};
