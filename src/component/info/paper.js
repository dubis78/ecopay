import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import ImgPaper from '../../images/paper.jpg'

class Paper extends Component {
    render() {
        return (

            <div
                className="paper"
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
                                    ECOPAY
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
                            <div className="col-sm">
                                <img className="img-fluid mx-auto d-block border border-dark" src={ImgPaper} alt="" />
                            </div>
                            <div className="col-sm justify-content-center">
                                <h2 className="text-center p-2">
                                    Residuos de Papel y Cartón
                                </h2>
                                <p className="text-center justify-content-center">
                                    En este contenedor se puede ingresar periódicos, revistas, papel blanco, cajas de cartón 
                                    (galletas, aparatos electrónicos, etc.), rollo de papel higiénico y de cocina, papel de 
                                    envoltorios, publicidad, sobres sin ventanilla, hueveras, etc.
                                    Las ventajas medioambientales de reciclar papel y cartón son muy diversas. Por cada 
                                    tonelada de papel que se recoge y se recicla se ahorran dos metros cúbicos de vertedero, 
                                    140 litros de petróleo, 50.000 litros de agua y la emisión de 900 kilos de dióxido de 
                                    carbono (CO2), uno de los gases de efecto invernadero causante del cambio climático. En 
                                    nuestra bolsa de basura el papel y cartón suponen aproximadamente un 20 % en el peso y un
                                    55% en el volumen. Tirar a la basura estos materiales es un coste energético, medioambiental 
                                    económico, que no nos podemos permitir.
                                </p>
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

export default Paper;