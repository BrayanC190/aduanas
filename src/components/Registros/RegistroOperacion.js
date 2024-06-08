import React, { useEffect } from "react";
import "./style.css";
import axios from "axios";

function RegistroOperacion() {
  useEffect(() => {
    const registerForm = document.querySelector(".my-form");

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const referencia = document.getElementById("referencia").value;
        const cliente_id = document.getElementById("cliente_id").value;
        const exportador_id = document.getElementById("exportador_id").value;
        const receptor = document.getElementById("receptor").value;
        const operador_id = document.getElementById("operador_id").value;
        const pais_exporta = document.getElementById("pais_exporta").value;
        const puerto_origen = document.getElementById("puerto_origen").value;
        const puerto_destino = document.getElementById("puerto_destino").value;
        const aduana_ingreso = document.getElementById("aduana_ingreso").value;
        const mercancia_id = document.getElementById("mercancia_id").value;
        const estatus = document.getElementById("estatus").value;
        const buque_id = document.getElementById("buque_id").value;
        const fecha_envio = document.getElementById("fecha_envio").value;
        const fecha_llegada = document.getElementById("fecha_llegada").value;
        const flete = document.getElementById("flete").value;
        const forma_pago = document.getElementById("forma_pago").value;
        const pais_origen_mercancia = document.getElementById(
          "pais_origen_mercancia"
        ).value;
        const estado_entrega = document.getElementById("estado_entrega").value;
        const ciudad_entrega = document.getElementById("ciudad_entrega").value;
        const terminal_origen_id =
          document.getElementById("terminal_origen_id").value;
        const naviera_id = document.getElementById("naviera_id").value;
        const transportista_id =
          document.getElementById("transportista_id").value;
        const vehiculo_id = document.getElementById("vehiculo_id").value;
        const bl = document.getElementById("bl").value;

        const response = await axios.post(
          "http://localhost:3001/registroOperacion",
          {
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
            bl,
          },
          { withCredentials: true }
        );

        const result = response.data;
        console.log("Respuesta:", result);

        if (result.message === "Operación registrada exitosamente") {
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
        <h1>Registro Operación</h1>
      </div>
      <div className="input-row">
      <div className="input__wrapper">
        <input
          type="text"
          id="referencia"
          name="referencia"
          className="input__field"
          pattern="\d{7}-\d{2}"
          placeholder="Referencia *"
          required
        />
        <label htmlFor="referencia" className="input__label">
          Referencia *
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="cliente_id"
          name="cliente_id"
          className="input__field"
          placeholder="ID del Cliente *"
          required
        />
        <label htmlFor="cliente_id" className="input__label">
          ID del Cliente *
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="exportador_id"
          name="exportador_id"
          className="input__field"
          placeholder="ID del Exportador *"
          required
        />
        <label htmlFor="exportador_id" className="input__label">
          ID del Exportador *
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="receptor"
          name="receptor"
          className="input__field"
          placeholder="Receptor *"
          required
        />
        <label htmlFor="receptor" className="input__label">
          Receptor *
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="operador_id"
          name="operador_id"
          className="input__field"
          placeholder="ID del Operador"
        />
        <label htmlFor="operador_id" className="input__label">
          ID del Operador
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="pais_exporta"
          name="pais_exporta"
          className="input__field"
          placeholder="País que Exporta *"
          required
        />
        <label htmlFor="pais_exporta" className="input__label">
          País que Exporta *
        </label>
      </div>
      </div>
      <div className="input-row">
      <div className="input__wrapper">
        <input
          type="text"
          id="puerto_origen"
          name="puerto_origen"
          className="input__field"
          placeholder="Puerto de Origen"
        />
        <label htmlFor="puerto_origen" className="input__label">
          Puerto de Origen
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="puerto_destino"
          name="puerto_destino"
          className="input__field"
          placeholder="Puerto de Destino *"
          required
        />
        <label htmlFor="puerto_destino" className="input__label">
          Puerto de Destino *
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="aduana_ingreso"
          name="aduana_ingreso"
          className="input__field"
          placeholder="Aduana de Ingreso"
        />
        <label htmlFor="aduana_ingreso" className="input__label">
          Aduana de Ingreso
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="mercancia_id"
          name="mercancia_id"
          className="input__field"
          placeholder="ID de la Mercancía *"
          required
        />
        <label htmlFor="mercancia_id" className="input__label">
          ID de la Mercancía *
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="estatus"
          name="estatus"
          className="input__field"
          placeholder="Estatus"
        />
        <label htmlFor="estatus" className="input__label">
          Estatus
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="buque_id"
          name="buque_id"
          className="input__field"
          placeholder="ID del Buque"
        />
        <label htmlFor="buque_id" className="input__label">
          ID del Buque
        </label>
      </div>
      </div>
      <div className="input-row">
      <div className="input__wrapper">
        <input
          type="date"
          id="fecha_envio"
          name="fecha_envio"
          className="input__field"
          placeholder="Fecha de Envío"
          requiered
        />
        <label htmlFor="fecha_envio" className="input__label">
          Fecha de Envío *
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="date"
          id="fecha_llegada"
          name="fecha_llegada"
          className="input__field"
          placeholder="Fecha de Llegada"
        />
        <label htmlFor="fecha_llegada" className="input__label">
          Fecha de Llegada
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          step="0.01"
          id="flete"
          name="flete"
          className="input__field"
          placeholder="Flete *"
          required
        />
        <label htmlFor="flete" className="input__label">
          Flete *
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="forma_pago"
          name="forma_pago"
          className="input__field"
          placeholder="Forma de Pago *"
          required
        />
        <label htmlFor="forma_pago" className="input__label">
          Forma de Pago *
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="pais_origen_mercancia"
          name="pais_origen_mercancia"
          className="input__field"
          placeholder="País de Origen de la Mercancía"
        />
        <label htmlFor="pais_origen_mercancia" className="input__label">
          País de la Mercancía
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="estado_entrega"
          name="estado_entrega"
          className="input__field"
          placeholder="Estado de Entrega"
        />
        <label htmlFor="estado_entrega" className="input__label">
          Estado de Entrega
        </label>
      </div>
      </div>
      <div className="input-row">
      <div className="input__wrapper">
        <input
          type="text"
          id="ciudad_entrega"
          name="ciudad_entrega"
          className="input__field"
          placeholder="Ciudad de Entrega"
        />
        <label htmlFor="ciudad_entrega" className="input__label">
          Ciudad de Entrega
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="terminal_origen_id"
          name="terminal_origen_id"
          className="input__field"
          placeholder="ID de la Terminal"
          required
        />
        <label htmlFor="terminal_origen_id" className="input__label">
          ID de la Terminal
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="naviera_id"
          name="naviera_id"
          className="input__field"
          placeholder="ID de la Naviera"
        />
        <label htmlFor="naviera_id" className="input__label">
          ID de la Naviera
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="transportista_id"
          name="transportista_id"
          className="input__field"
          placeholder="ID del Transportista"
        />
        <label htmlFor="transportista_id" className="input__label">
          ID del Transportista
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="vehiculo_id"
          name="vehiculo_id"
          className="input__field"
          placeholder="ID del Vehículo"
        />
        <label htmlFor="vehiculo_id" className="input__label">
          ID del Vehículo
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="bl"
          name="bl"
          className="input__field"
          placeholder="BL"
        />
        <label htmlFor="bl" className="input__label">
          BL
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

export default RegistroOperacion;
