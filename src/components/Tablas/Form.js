import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormComponent = ({ datos }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    ...datos,
    fecha_envio: datos.fecha_envio ? datos.fecha_envio.split('T')[0] : '', //arregla el formato de fecha
    fecha_llegada: datos.fecha_llegada ? datos.fecha_llegada.split('T')[0] : '',
  });
    
  useEffect(() => {
    setFormData({
      ...datos,
      fecha_envio: datos.fecha_envio ? datos.fecha_envio.split('T')[0] : '',
      fecha_llegada: datos.fecha_llegada ? datos.fecha_llegada.split('T')[0] : '',
    });
  }, [datos]);  // Detecta cambios en datos y actualiza formData
  

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    // Aquí va el código para manejar el envío del formulario y actualizar la operación
    try {
      await axios.put('http://localhost:3001/UpdateOperacion', formData);
      setIsEditable(false);
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
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
            defaultValue={formData.referencia}
            disabled={!isEditable || isEditable}
            onChange={handleChange}
          />
          <label htmlFor="referencia" className="input__label">
            Referencia*
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
            defaultValue={formData.cliente_id}
            disabled={!isEditable}
            onChange={handleChange}
          />
          <label htmlFor="cliente_id" className="input__label">
            ID del Cliente 
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
            defaultValue={formData.exportador_id}
            disabled={!isEditable}
            onChange={handleChange}
          />
          <label htmlFor="exportador_id" className="input__label">
            ID del Exportador
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
            defaultValue={formData.receptor}
            disabled={!isEditable}
            onChange={handleChange}
          />
          <label htmlFor="receptor" className="input__label">
            Receptor
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="number"
            id="operador_id"
            name="operador_id"
            className="input__field"
            placeholder="ID del Operador"
            defaultValue={formData.operador_id}
            disabled={!isEditable}
            onChange={handleChange}
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
            defaultValue={formData.pais_exporta}
            disabled={!isEditable || isEditable}
            onChange={handleChange}
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
            defaultValue={formData.puerto_origen}
            disabled={!isEditable || isEditable}
            onChange={handleChange}
          />
          <label htmlFor="puerto_origen" className="input__label">
            Puerto de Origen*
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
            defaultValue={formData.puerto_destino}
            disabled={!isEditable}
            onChange={handleChange}
          />
          <label htmlFor="puerto_destino" className="input__label">
            Puerto de Destino
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="number"
            id="aduana_ingreso"
            name="aduana_ingreso"
            className="input__field"
            placeholder="Aduana de Ingreso"
            defaultValue={formData.aduana_ingreso}
            disabled={!isEditable}
            onChange={handleChange}
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
            defaultValue={formData.mercancia_id}
            disabled={!isEditable}
            onChange={handleChange}
          />
          <label htmlFor="mercancia_id" className="input__label">
            ID de la Mercancía
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="number"
            id="estatus"
            name="estatus"
            className="input__field"
            placeholder="Estatus"
            defaultValue={formData.estatus}
            disabled={!isEditable || isEditable}
            onChange={handleChange}
          />
          <label htmlFor="estatus" className="input__label">
            Estatus*
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="number"
            id="buque_id"
            name="buque_id"
            className="input__field"
            placeholder="ID del Buque"
            defaultValue={formData.buque_id}
            disabled={!isEditable}
            onChange={handleChange}
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
            required
            defaultValue={formData.fecha_envio}
            disabled={!isEditable || isEditable}
            onChange={handleChange}
          />
          <label htmlFor="fecha_envio" className="input__label">
            Fecha de Envío*
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="date"
            id="fecha_llegada"
            name="fecha_llegada"
            className="input__field"
            placeholder="Fecha de Llegada"
            defaultValue={formData.fecha_llegada}
            disabled={!isEditable}
            onChange={handleChange}
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
            defaultValue={formData.flete}
            disabled={!isEditable}
            onChange={handleChange}
          />
          <label htmlFor="flete" className="input__label">
            Flete
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="text"
            id="forma_pago"
            name="forma_pago"
            className="input__field"
            placeholder="Forma de Pago"
            required
            defaultValue={formData.forma_pago}
            disabled={!isEditable}
            onChange={handleChange}
          />
          <label htmlFor="forma_pago" className="input__label">
            Forma de Pago
          </label>
        </div>
        <div className="input__wrapper">
          <input
            type="text"
            id="pais_origen_mercancia"
            name="pais_origen_mercancia"
            className="input__field"
            placeholder="País de Origen de la Mercancía"
            defaultValue={formData.pais_origen_mercancia}
            disabled={!isEditable}
            onChange={handleChange}
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
            defaultValue={formData.estado_entrega}
            disabled={!isEditable}
            onChange={handleChange}
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
            defaultValue={formData.ciudad_entrega}
            disabled={!isEditable}
            onChange={handleChange}
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
            defaultValue={formData.terminal_origen_id}
            disabled={!isEditable}
            onChange={handleChange}
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
            defaultValue={formData.naviera_id}
            disabled={!isEditable}
            onChange={handleChange}
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
            defaultValue={formData.transportista_id}
            disabled={!isEditable}
            onChange={handleChange}
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
            defaultValue={formData.vehiculo_id}
            disabled={!isEditable}
            onChange={handleChange}
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
            defaultValue={formData.bl}
            disabled={!isEditable}
            onChange={handleChange}
          />
          <label htmlFor="bl" className="input__label">
            BL
          </label>
        </div>
      </div>
      <div className="input-row">
        <button
          type="submit"
          className="submit-button"
          id="submit-button"
          disabled={!isEditable}
        >
          Guardar
        </button>
        <button
          type="button"
          className="edit-button"
          onClick={handleEditClick}
          disabled={isEditable}
        >
          Editar
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
