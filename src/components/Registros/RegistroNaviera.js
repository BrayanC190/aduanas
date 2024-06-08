import React, { useEffect } from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function RegistroNaviera() {
  useEffect(() => {
    const registerForm = document.querySelector(".my-form");

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const nombre = document.getElementById("nombre").value;
        const direccion = document.getElementById("direccion").value;
        const telefono = document.getElementById("telefono").value;
        const pais = document.getElementById("pais").value;
        const estado = document.getElementById("estado").value;
        const ciudad = document.getElementById("ciudad").value;

        const response = await axios.post(
          "http://localhost:3001/registro",
          {
            nombre,
            direccion,
            telefono,
            pais,
            estado,
            ciudad,
            Tabla: "Naviera",
          },
          { withCredentials: true }
        );

        const result = response.data;
        console.log("Respuesta:", result);

        if (result.message === "Naviera registrado exitosamente") {
          alert("Registro Exitoso");
        } else {
          console.log(result.message);
        }
      } catch (error) {
        console.error("Error:", error);
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
        <h1>Registro Naviera</h1>
      </div>
      <div className="input-row">
      <div className="input__wrapper">
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="input__field"
          placeholder="Nombre"
          required
        />
        <label htmlFor="nombre" className="input__label">
          Nombre
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="direccion"
          name="direccion"
          className="input__field"
          placeholder="Dirección"
          required
        />
        <label htmlFor="direccion" className="input__label">
          Dirección
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="tel"
          id="telefono"
          name="telefono"
          className="input__field"
          placeholder="Teléfono"
          required
          pattern="[0-9]{10}"
          title="Debe ser un número de 10 dígitos"
        />
        <label htmlFor="telefono" className="input__label">
          Teléfono (10 dígitos)
        </label>
      </div>
      </div>
      <div className="input-row">
      <div className="input__wrapper">
        <input
          type="text"
          id="pais"
          name="pais"
          className="input__field"
          placeholder="País"
          required
        />
        <label htmlFor="pais" className="input__label">
          País
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="estado"
          name="estado"
          className="input__field"
          placeholder="Estado"
          required
        />
        <label htmlFor="estado" className="input__label">
          Estado
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="ciudad"
          name="ciudad"
          className="input__field"
          placeholder="Ciudad"
          required
        />
        <label htmlFor="ciudad" className="input__label">
          Ciudad
        </label>
      </div>
      </div>
      <button type="submit" className="my-form__button">
        Registrar
      </button>
      <div className="my-form__actions"></div>
    </form>
  );
}

export default RegistroNaviera;
