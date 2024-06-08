import React, { useEffect } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

function RegistroBuque() {
  useEffect(() => {
    const registerForm = document.querySelector(".my-form");

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const nombre = document.getElementById("nombre").value;
        const naviera_id = document.getElementById("naviera_id").value;

        const response = await axios.post(
          'http://localhost:3001/registroBuque',
          {
            nombre,
            naviera_id,
            Tabla: "Buque"
          },
          { withCredentials: true }
        );

        const result = response.data;
        console.log('Respuesta:', result);

        if (result.message === "Buque registrado exitosamente") {
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
        <h1>Registro Buque</h1>
      </div>
      <div className="input__wrapper">
        <input type="text" id="nombre" name="nombre" className="input__field" placeholder="Nombre del Buque" required />
        <label htmlFor="nombre" className="input__label">Nombre del Buque</label>
      </div>
      <div className="input__wrapper">
        <input type="number" id="naviera_id" name="naviera_id" className="input__field" placeholder="ID de la Naviera" required />
        <label htmlFor="naviera_id" className="input__label">ID de la Naviera</label>
      </div>
      <button type="submit" className="my-form__button">Registrar</button>
      <div className="my-form__actions">

      </div>
    </form>
  );
}

export default RegistroBuque;
