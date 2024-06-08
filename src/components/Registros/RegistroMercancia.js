import React, { useEffect } from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function RegistroMercancia() {
  useEffect(() => {
    const registerForm = document.querySelector(".my-form");

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const descripcion = document.getElementById("descripcion").value;
        const peso_bruto = document.getElementById("peso_bruto").value;
        const volumen = document.getElementById("volumen").value;
        const numero_bultos = document.getElementById("numero_bultos").value;
        const numero_unidades =
          document.getElementById("numero_unidades").value;
        const dimensiones = document.getElementById("dimensiones").value;
        const marcas = document.getElementById("marcas").value;
        const tipo_embalaje = document.getElementById("tipo_embalaje").value;

        const response = await axios.post(
          "http://localhost:3001/registroMercancia",
          {
            descripcion,
            peso_bruto,
            volumen,
            numero_bultos,
            numero_unidades,
            dimensiones,
            marcas,
            tipo_embalaje,
          },
          { withCredentials: true }
        );

        const result = response.data;
        console.log("Respuesta:", result);

        if (result.message === "Mercancia registrada exitosamente") {
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
        <h1>Registro Mercancia</h1>
      </div>
      <div className="input-row">
        <div className="input__wrapper">
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            className="input__field"
            placeholder="Descripción"
            required
          />
          <label htmlFor="descripcion" className="input__label">
            Descripción
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="number"
            step="0.01"
            id="peso_bruto"
            name="peso_bruto"
            className="input__field"
            placeholder="Peso Bruto"
            min="0"
            required
          />
          <label htmlFor="peso_bruto" className="input__label">
            Peso Bruto
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="number"
            step="0.01"
            id="volumen"
            name="volumen"
            className="input__field"
            placeholder="Volumen"
            min="0"
            required
          />
          <label htmlFor="volumen" className="input__label">
            Volumen
          </label>
        </div>
      </div>
      <div className="input-row">
        <div className="input__wrapper">
          <input
            type="number"
            id="numero_bultos"
            name="numero_bultos"
            className="input__field"
            placeholder="Número de Bultos"
            min="0"
            required
          />
          <label htmlFor="numero_bultos" className="input__label">
            Número de Bultos
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="number"
            id="numero_unidades"
            name="numero_unidades"
            className="input__field"
            placeholder="Número de Unidades"
            min="0"
            required
          />
          <label htmlFor="numero_unidades" className="input__label">
            Número de Unidades
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="text"
            id="dimensiones"
            name="dimensiones"
            className="input__field"
            placeholder="Dimensiones"
            required
          />
          <label htmlFor="dimensiones" className="input__label">
            Dimensiones
          </label>
        </div>
      </div>
      <div className="input-row">
        <div className="input__wrapper">
          <input
            type="text"
            id="marcas"
            name="marcas"
            className="input__field"
            placeholder="Marcas"
            required
          />
          <label htmlFor="marcas" className="input__label">
            Marcas
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="text"
            id="tipo_embalaje"
            name="tipo_embalaje"
            className="input__field"
            placeholder="Tipo de Embalaje"
            required
          />
          <label htmlFor="tipo_embalaje" className="input__label">
            Tipo de Embalaje
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

export default RegistroMercancia;
