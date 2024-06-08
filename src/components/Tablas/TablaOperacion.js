import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormComponent from './Form';
import "./style.css";

function TablaOperacion() {
  const [datos, setDatos] = useState(null);
  const [referencia, setReferencia] = useState('');
  const [estatus, setEstatus] = useState(0);

  const buscarDatos = async (referencia) => {
    try {
      const response = await axios.get(`http://localhost:3001/tablaReferencia`, {
        params: { referencia }
      });
      if (response.data.length > 0) {
        setDatos(response.data[0]);
        setEstatus(response.data[0].estatus);
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleInputChange = (e) => {
    setReferencia(e.target.value);
  };

  const handleBuscar = () => {
    buscarDatos(referencia);
  };

  const cancelar = async () => {
    await actualizarEstatus(0);
  };

  const siguiente = async () => {
    if (estatus < 9) {
      const nuevoEstatus = estatus + 1;
      await actualizarEstatus(nuevoEstatus);
    }
  };

  const actualizarEstatus = async (nuevoEstatus) => {
    try {
      await axios.post('http://localhost:3001/Aumentoestatus', {
        referencia,
        estatus: nuevoEstatus
      });
      // Actualiza los datos después de cambiar el estatus con el boton
      await buscarDatos(referencia);  // Espera a que los datos se actualicen
    } catch (error) {
      console.error('Error al actualizar el estatus:', error);
    }
  };

  useEffect(() => {
  }, [referencia]);

  return (
    <div className="table-container">
      <h1>Buscar Operaciones por Referencia</h1>
      <div className="buscador-container">
        <input
          type="text"
          value={referencia}
          onChange={handleInputChange}
          placeholder="Ingrese referencia"
        />
        <button onClick={handleBuscar}>Buscar</button>
      </div>
      {datos ? (
        <FormComponent key={`${datos.id}-${estatus}`} datos={datos} />
      ) : (
        <p>No se encontraron datos para la referencia ingresada.</p>
      )}
      <div className="container">
        <div id="balls" className="balls">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`ball ${i < estatus ? 'filled' : ''}`}></div>
          ))}
        </div>
        <div id="status-text">{[
          'Cancelado',
          'Alta de Solicitud de Transporte',
          'Solicitud de Transporte Emitida',
          'Solicitud de Transporte Aceptada',
          'Embarcado',
          'En Trayecto',
          'En Espera para Descargo',
          'En Descargó',
          'Descargada',
          'Liberada'
        ][estatus]}</div>
        <div className="buttons">
          <button
            id="cancel-button"
            onClick={cancelar}
            disabled={estatus >= 4 || estatus === 0}
            style={{ backgroundColor: estatus >= 4 || estatus === 0 ? '#ccc' : '#4299e1', cursor: estatus >= 4 || estatus === 0 ? 'not-allowed' : 'pointer' }}
          >
            Cancelar
          </button>
          <button
            id="next-button"
            onClick={siguiente}
            disabled={estatus >= 9 || estatus < 1}
            style={{ backgroundColor: estatus >= 9 || estatus < 1 ? '#ccc' : '#4299e1', cursor: estatus >= 9 || estatus < 1 ? 'not-allowed' : 'pointer' }}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default TablaOperacion;
