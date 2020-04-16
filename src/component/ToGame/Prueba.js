import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Board from './Board';


class Prueba extends Component {
    render() {

        return (
            <div
                className="togame"
            >
                <header>
                    <nav
                        id="nav"
                        className="navbar navbar-inverse navbar-static-top navbar-expand-lg justify-content-between"
                    >
                        <a
                            className="navbar-brand text-white"
                        >
                            <h2
                                className="nombre text-responsive"
                            >
                                <img
                                    id="logo"
                                    src={Logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt=""
                                />
                                ECOPAY
                            </h2>
                        </a>
                        <div
                            className="navbar-nav"
                        >
                            <Link
                                to="/"
                            >
                                <button
                                    id="bntGame"
                                    className="nav-item text-white btn rounded-pill mr-1"
                                >
                                    Regresar
                                    </button>
                            </Link>
                        </div>
                    </nav>
                </header>
                <div
                    className="bg"
                >
                    <h2 className="text-center text-white">BIENVENIDO</h2>
                    <div className="p-5">
                        <Board />
                    </div>
                </div>
                <footer
                    className="footer p-2"
                >
                    <div
                        className="card-footer bg-transparent border-success text-center text-white"
                    >
                        By Team ECOPAY
                    </div>
                </footer>
            </div>
        );
    }
}

export default Prueba;