import React, { useEffect } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

function RegistroVehiculo() {
  useEffect(() => {
    const registerForm = document.querySelector(".my-form");

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const matricula = document.getElementById("matricula").value;
        const transportista_id = document.getElementById("transportista_id").value;

        const response = await axios.post(
          'http://localhost:3001/registroVehiculo',
          {
            matricula,
            transportista_id
          },
          { withCredentials: true }
        );

        const result = response.data;
        console.log('Respuesta:', result);

        if (result.message === "Vehiculo registrado exitosamente") {
  //        window.location.href = '/';
        alert("Registro Exitoso");  
        } else {
          console.log(result.message);
        }

      } catch (error) {
        console.error('Error:', error);
      }
    };

    registerForm.addEventListener("submit", handleSubmit);

    return () => {
      registerForm.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <form className="my-form">
      <div className="register-welcome-row">
        <h1>Registro Vehiculo</h1>
      </div>
      <div className="input__wrapper">
        <input type="text" id="matricula" name="matricula" className="input__field" placeholder="Matrícula del Vehiculo" required />
        <label htmlFor="matricula" className="input__label">Matrícula del Vehiculo</label>
      </div>
      <div className="input__wrapper">
        <input type="number" id="transportista_id" name="transportista_id" className="input__field" placeholder="ID del Transportista" required />
        <label htmlFor="transportista_id" className="input__label">ID del Transportista</label>
      </div>
      <button type="submit" className="my-form__button">Registrar</button>
      <div className="my-form__actions">

      </div>
    </form>
  );
}

export default RegistroVehiculo;
