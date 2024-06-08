import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabla from './Tabla';
import "./style.css";

function VerTablaOperacion() {
  const [tabla, setTabla] = useState([]);
  const tableName = "Operacion"; 

  useEffect(() => {
    const fetchTabla = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/VerTablaOperacion`);
        setTabla(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de la tabla:', error);
      }
    };

    fetchTabla();
  }, [tableName]);

  return (
    <div className="table-container">
      <h1>{tableName}</h1>
      <Tabla datos={tabla} />
    </div>
  );
}

export default VerTablaOperacion;
