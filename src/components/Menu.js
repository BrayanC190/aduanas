import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <button className="menu-toggle" onClick={toggleMenu}>
                &#9776;
            </button>
            <nav className={menuOpen ? 'open' : ''}>
                <ul>
                    <li><Link to="/TablaOperacion" onClick={toggleMenu}>Consultar referencia</Link></li>
                    <li>
                        <a href="#" >Consultar</a>
                        <ul className="submenu">
                            <li><Link to="/Tablas/Buque" onClick={toggleMenu}>Tabla Buque</Link></li>
                            <li><Link to="/Tablas/Cliente" onClick={toggleMenu}>Tabla Cliente</Link></li>
                            <li><Link to="/Tablas/Exportador" onClick={toggleMenu}>Tabla Exportador</Link></li>
                            <li><Link to="/Tablas/Mercancia" onClick={toggleMenu}>Tabla Mercancia</Link></li>
                            <li><Link to="/Tablas/Naviera" onClick={toggleMenu}>Tabla Naviera</Link></li>
                            <li><Link to="/VerTablaOperacion" onClick={toggleMenu}>Tabla Operacion</Link></li>
                            <li><Link to="/Tablas/Operador" onClick={toggleMenu}>Tabla Operador</Link></li>
                            <li><Link to="/Tablas/Terminal" onClick={toggleMenu}>Tabla Terminal</Link></li>
                            <li><Link to="/Tablas/Transportista" onClick={toggleMenu}>Tabla Transportista</Link></li>
                            <li><Link to="/Tablas/Vehiculo" onClick={toggleMenu}>Tabla Vehiculo</Link></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" onClick={toggleMenu}>Registrar</a>
                        <ul className="submenu">
                            <li><Link to="/RegistroBuque" onClick={toggleMenu}>Registro Buque</Link></li>
                            <li><Link to="/RegistroCliente" onClick={toggleMenu}>Registro Cliente</Link></li>
                            <li><Link to="/RegistroExportador" onClick={toggleMenu}>Registro Exportador</Link></li>
                            <li><Link to="/RegistroMercancia" onClick={toggleMenu}>Registro Mercancia</Link></li>
                            <li><Link to="/RegistroNaviera" onClick={toggleMenu}>Registro Naviera</Link></li>
                            <li><Link to="/RegistroOperacion" onClick={toggleMenu}>Registro Operacion</Link></li>
                            <li><Link to="/RegistroOperador" onClick={toggleMenu}>Registro Operador</Link></li>
                            <li><Link to="/RegistroTerminal" onClick={toggleMenu}>Registro Terminal</Link></li>
                            <li><Link to="/RegistroTransportista" onClick={toggleMenu}>Registro Transportista</Link></li>
                            <li><Link to="/RegistroVehiculo" onClick={toggleMenu}>Registro Vehiculo</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
