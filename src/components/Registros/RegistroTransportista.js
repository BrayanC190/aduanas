import React, { useEffect } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

function RegistroTransportista() {
  useEffect(() => {
    const registerForm = document.querySelector(".my-form");

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;

        const response = await axios.post(
          'http://localhost:3001/registroTransportista',
          {
            nombre,
            telefono
          },
          { withCredentials: true }
        );

        const result = response.data;
        console.log('Respuesta:', result);

        if (result.message === "Transportista registrado exitosamente") {
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
        <h1>Registro Transportista</h1>
      </div>
      <div className="input__wrapper">
        <input type="text" id="nombre" name="nombre" className="input__field" placeholder="Nombre del Transportista" required />
        <label htmlFor="nombre" className="input__label">Nombre del Transportista</label>
      </div>
      <div className="input__wrapper">
        <input type="tel" id="telefono" name="telefono" className="input__field" placeholder="Teléfono" required />
        <label htmlFor="telefono" className="input__label">Teléfono</label>
      </div>
      <button type="submit" className="my-form__button">Registrar</button>
      <div className="my-form__actions">

      </div>
    </form>
  );
}

export default RegistroTransportista;
