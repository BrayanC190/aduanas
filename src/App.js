// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Menu from './components/Menu';
import RegistroCliente from './components/Registros/RegistroCliente';
import RegistroExportador from './components/Registros/RegistroExportador';
import RegistroNaviera from './components/Registros/RegistroNaviera';
import RegistroOperador from './components/Registros/RegistroOperador';
import RegistroOperacion from './components/Registros/RegistroOperacion';
import RegistroTerminal from './components/Registros/RegistroTerminal';
import RegistroVehiculo from './components/Registros/RegistroVehiculo';
import RegistroBuque from './components/Registros/RegistroBuque';
import RegistroTransportista from './components/Registros/RegistroTransportista';
import RegistroMercancia from './components/Registros/RegistroMercancia';
import Tablas from './components/Tablas/Tablas';
import TablaOperacion from './components/Tablas/TablaOperacion';
import VerTablaOperacion from './components/Tablas/VerTablaOperacion';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`App ${menuOpen ? 'menu-open' : ''}`}>
            <BrowserRouter>
                <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    ☰
                </button>
                <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
                <Routes>
                    <Route index element={<TablaOperacion />} />
                    <Route path="/RegistroCliente" element={<RegistroCliente />} />
                    <Route path="/RegistroExportador" element={<RegistroExportador />} />
                    <Route path="/RegistroNaviera" element={<RegistroNaviera />} />
                    <Route path="/RegistroOperacion" element={<RegistroOperacion />} />
                    <Route path="/RegistroOperador" element={<RegistroOperador />} />
                    <Route path="/RegistroTerminal" element={<RegistroTerminal />} />
                    <Route path="/RegistroBuque" element={<RegistroBuque />} />
                    <Route path="/RegistroTransportista" element={<RegistroTransportista />} />
                    <Route path="/RegistroVehiculo" element={<RegistroVehiculo />} />
                    <Route path="/RegistroMercancia" element={<RegistroMercancia />} />
                    <Route path="/Tablas/:tableName" element={<Tablas />} />
                    <Route path="/TablaOperacion" element={<TablaOperacion />} />
                    <Route path="/VerTablaOperacion" element={<VerTablaOperacion />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
