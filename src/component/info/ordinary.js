import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Canecas from '../../images/canecas.jpg'

class Ordinary extends Component {
    render() {
        return (

            <div
                className="ordinary"
            >
                <header>
                    <nav
                        id="nav"
                        className="navbar navbar-inverse navbar-static-top navbar-expand-lg navbar-light justify-content-between"
                    >
                        <a
                            className="navbar-brand text-white"
                        >
                            <h2
                                className="text-responsive"
                            >
                                <img
                                    id="logo"
                                    src={Logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt=""
                                />
                                <span>
                                    ECOPAY
                                    </span>
                            </h2>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                        >
                        </button>
                        <div
                            className="navbar-nav"
                        >
                            <Link
                                to="/home"
                            >
                                <button
                                    id="bntGame"
                                    className="nav-item text-white btn rounded-pill mr-1"
                                >
                                    Inicio
                                    </button>
                            </Link>
                            <Link to="/game"
                            >
                                <button
                                    id="bntGame"
                                    className="nav-item text-white btn rounded-pill mr-1"
                                >
                                    Juego
                                    </button>
                            </Link>
                        </div>
                    </nav>
                </header>
                <article className="bg">
                    <div className="container p-5">
                        <div className="row d-flex align-items-center p-5">      
                            <div className="col-sm justify-content-center">
                                <h2 className="text-center p-2">
                                    Residuos Ordinarios
                                </h2>
                                <p className="text-center justify-content-center">
                                Con los restos que se depositan en este contenedor se puede hacer compost, 
                                biorresiduo que puede aprovecharse como fertilizante e incluso como generador de energía.
                                <br />
                                Lo que debe depositarse en este contenedor es: restos de alimentos como pieles de frutas, 
                                espinas de pescado, plantas, cascaras de huevo o posos; o servilletas y papel de cocina usados.
                                </p>
                            </div>
                            <div className="col-sm">
                                <img className="img-fluid mx-auto d- border border-dark" src={Canecas} alt="" />
                            </div>
                        </div>
                    </div>
                </article>
                <footer
                    className="footer p-4"
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

export default Ordinary;