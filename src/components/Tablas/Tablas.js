import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Tabla from './Tabla';
import "./style.css";
//Metodo dinamico que obtiene el nombre de la tabla atravez del url y hace la peticion del select
function Tablas() {
  const [tabla, setTabla] = useState([]);
  const { tableName } = useParams(); // Obtener el nombre de la tabla desde la URL

  useEffect(() => {
    const fetchTabla = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/tabla/${tableName}`);
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

export default Tablas;
